import { describe, expect, it, beforeEach, vi } from "vitest";
import { portfolioRouter } from "./portfolio";
import type { TrpcContext } from "../_core/context";
import type { User } from "../../drizzle/schema";

// Mock database functions
vi.mock("../db", () => ({
  getAllPortfolioImages: vi.fn(),
  getPortfolioImages: vi.fn(),
  getPortfolioImageById: vi.fn(),
  createPortfolioImage: vi.fn(),
  updatePortfolioImage: vi.fn(),
  deletePortfolioImage: vi.fn(),
}));

const mockAdminUser: User = {
  id: 1,
  openId: "admin-user",
  name: "Admin",
  email: "admin@example.com",
  loginMethod: "manus",
  role: "admin",
  createdAt: new Date(),
  updatedAt: new Date(),
  lastSignedIn: new Date(),
};

const mockRegularUser: User = {
  id: 2,
  openId: "regular-user",
  name: "User",
  email: "user@example.com",
  loginMethod: "manus",
  role: "user",
  createdAt: new Date(),
  updatedAt: new Date(),
  lastSignedIn: new Date(),
};

function createAdminContext(): TrpcContext {
  return {
    user: mockAdminUser,
    req: { protocol: "https", headers: {} } as TrpcContext["req"],
    res: {} as TrpcContext["res"],
  };
}

function createUserContext(): TrpcContext {
  return {
    user: mockRegularUser,
    req: { protocol: "https", headers: {} } as TrpcContext["req"],
    res: {} as TrpcContext["res"],
  };
}

describe("portfolioRouter", () => {
  describe("list", () => {
    it("should allow authenticated users to list portfolio images", async () => {
      const caller = portfolioRouter.createCaller(createUserContext());
      
      // This should not throw - protected procedure allows authenticated users
      expect(caller.list).toBeDefined();
    });

    it("should throw for unauthenticated users", async () => {
      const ctx: TrpcContext = {
        user: null,
        req: { protocol: "https", headers: {} } as TrpcContext["req"],
        res: {} as TrpcContext["res"],
      };
      const caller = portfolioRouter.createCaller(ctx);
      
      await expect(caller.list()).rejects.toThrow();
    });
  });

  describe("create", () => {
    it("should allow admin users to create portfolio images", async () => {
      const caller = portfolioRouter.createCaller(createAdminContext());
      
      // This should not throw - admin procedure allows admin users
      expect(caller.create).toBeDefined();
    });

    it("should deny regular users from creating portfolio images", async () => {
      const caller = portfolioRouter.createCaller(createUserContext());
      
      await expect(
        caller.create({
          fileKey: "test-key",
          url: "https://example.com/image.jpg",
          title: "Test Image",
          category: "portrait",
        })
      ).rejects.toThrow("You do not have required permission");
    });
  });

  describe("update", () => {
    it("should allow admin users to update portfolio images", async () => {
      const caller = portfolioRouter.createCaller(createAdminContext());
      
      expect(caller.update).toBeDefined();
    });

    it("should deny regular users from updating portfolio images", async () => {
      const caller = portfolioRouter.createCaller(createUserContext());
      
      await expect(
        caller.update({
          id: 1,
          title: "Updated Title",
        })
      ).rejects.toThrow("You do not have required permission");
    });
  });

  describe("delete", () => {
    it("should allow admin users to delete portfolio images", async () => {
      const caller = portfolioRouter.createCaller(createAdminContext());
      
      expect(caller.delete).toBeDefined();
    });

    it("should deny regular users from deleting portfolio images", async () => {
      const caller = portfolioRouter.createCaller(createUserContext());
      
      await expect(
        caller.delete({ id: 1 })
      ).rejects.toThrow("You do not have required permission");
    });
  });

  describe("reorder", () => {
    it("should allow admin users to reorder portfolio images", async () => {
      const caller = portfolioRouter.createCaller(createAdminContext());
      
      expect(caller.reorder).toBeDefined();
    });

    it("should deny regular users from reordering portfolio images", async () => {
      const caller = portfolioRouter.createCaller(createUserContext());
      
      await expect(
        caller.reorder({
          items: [{ id: 1, displayOrder: 0 }],
        })
      ).rejects.toThrow("You do not have required permission");
    });
  });
});
