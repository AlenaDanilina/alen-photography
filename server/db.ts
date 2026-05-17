import { eq, desc, asc } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { InsertUser, users, portfolioImages, InsertPortfolioImage, PortfolioImage } from "../drizzle/schema";
import { ENV } from './_core/env';

let _db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const values: InsertUser = {
      openId: user.openId,
    };
    const updateSet: Record<string, unknown> = {};

    const textFields = ["name", "email", "loginMethod"] as const;
    type TextField = (typeof textFields)[number];

    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };

    textFields.forEach(assignNullable);

    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    } else if (user.openId === ENV.ownerOpenId) {
      values.role = 'admin';
      updateSet.role = 'admin';
    }

    if (!values.lastSignedIn) {
      values.lastSignedIn = new Date();
    }

    if (Object.keys(updateSet).length === 0) {
      updateSet.lastSignedIn = new Date();
    }

    await db.insert(users).values(values).onDuplicateKeyUpdate({
      set: updateSet,
    });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);

  return result.length > 0 ? result[0] : undefined;
}

// Portfolio Images
export async function createPortfolioImage(data: InsertPortfolioImage): Promise<PortfolioImage> {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }

  const result = await db.insert(portfolioImages).values(data);
  const inserted = await db.select().from(portfolioImages).where(eq(portfolioImages.id, Number(result.insertId))).limit(1);
  return inserted[0]!;
}

export async function getPortfolioImages(category?: string): Promise<PortfolioImage[]> {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }

  let query = db.select().from(portfolioImages);
  if (category) {
    query = query.where(eq(portfolioImages.category, category as any));
  }
  return query.orderBy(asc(portfolioImages.displayOrder));
}

export async function getPortfolioImageById(id: number): Promise<PortfolioImage | undefined> {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }

  const result = await db.select().from(portfolioImages).where(eq(portfolioImages.id, id)).limit(1);
  return result[0];
}

export async function updatePortfolioImage(id: number, data: Partial<InsertPortfolioImage>): Promise<PortfolioImage> {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }

  await db.update(portfolioImages).set(data).where(eq(portfolioImages.id, id));
  const updated = await db.select().from(portfolioImages).where(eq(portfolioImages.id, id)).limit(1);
  return updated[0]!;
}

export async function deletePortfolioImage(id: number): Promise<void> {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }

  await db.delete(portfolioImages).where(eq(portfolioImages.id, id));
}

export async function getAllPortfolioImages(): Promise<PortfolioImage[]> {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }

  return db.select().from(portfolioImages).orderBy(asc(portfolioImages.displayOrder));
}
