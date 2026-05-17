import { z } from "zod";
import { adminProcedure, protectedProcedure, router } from "../_core/trpc";
import {
  createPortfolioImage,
  deletePortfolioImage,
  getAllPortfolioImages,
  getPortfolioImageById,
  getPortfolioImages,
  updatePortfolioImage,
} from "../db";

export const portfolioRouter = router({
  // Get all portfolio images (public)
  list: protectedProcedure
    .query(async () => {
      return getAllPortfolioImages();
    }),

  // Get images by category (public)
  listByCategory: protectedProcedure
    .input(z.object({ category: z.string() }))
    .query(async ({ input }) => {
      return getPortfolioImages(input.category);
    }),

  // Get single image by ID (public)
  getById: protectedProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ input }) => {
      return getPortfolioImageById(input.id);
    }),

  // Upload/create new portfolio image (admin only)
  create: adminProcedure
    .input(
      z.object({
        fileKey: z.string(),
        url: z.string().url(),
        title: z.string(),
        category: z.enum(["portrait", "fashion", "model_tests", "other"]),
        description: z.string().optional(),
        displayOrder: z.number().default(0),
        mimeType: z.string().default("image/jpeg"),
        fileSize: z.number().optional(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      return createPortfolioImage({
        ...input,
        uploadedBy: ctx.user.id,
      });
    }),

  // Update portfolio image (admin only)
  update: adminProcedure
    .input(
      z.object({
        id: z.number(),
        title: z.string().optional(),
        category: z.enum(["portrait", "fashion", "model_tests", "other"]).optional(),
        description: z.string().optional(),
        displayOrder: z.number().optional(),
        isPublished: z.number().optional(),
      })
    )
    .mutation(async ({ input }) => {
      const { id, ...data } = input;
      return updatePortfolioImage(id, data);
    }),

  // Delete portfolio image (admin only)
  delete: adminProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ input }) => {
      await deletePortfolioImage(input.id);
      return { success: true };
    }),

  // Reorder portfolio images (admin only)
  reorder: adminProcedure
    .input(
      z.object({
        items: z.array(
          z.object({
            id: z.number(),
            displayOrder: z.number(),
          })
        ),
      })
    )
    .mutation(async ({ input }) => {
      const results = await Promise.all(
        input.items.map((item) =>
          updatePortfolioImage(item.id, { displayOrder: item.displayOrder })
        )
      );
      return { success: true, updated: results.length };
    }),
});
