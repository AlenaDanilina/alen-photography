import { z } from "zod";
import { adminProcedure, router } from "../_core/trpc";
import { storagePut } from "../storage";
import { createPortfolioImage } from "../db";

export const uploadRouter = router({
  // Upload image to S3 and create portfolio entry
  image: adminProcedure
    .input(
      z.object({
        file: z.instanceof(File),
        title: z.string(),
        category: z.enum(["portrait", "fashion", "model_tests", "other"]),
        description: z.string().optional(),
        displayOrder: z.number().default(0),
      })
    )
    .mutation(async ({ input, ctx }) => {
      try {
        // Convert File to Buffer
        const buffer = await input.file.arrayBuffer();
        const uint8Array = new Uint8Array(buffer);

        // Generate file key with timestamp
        const timestamp = Date.now();
        const fileKey = `portfolio/${input.category}/${timestamp}-${input.file.name}`;

        // Upload to S3
        const { url, key } = await storagePut(
          fileKey,
          uint8Array,
          input.file.type || "image/jpeg"
        );

        // Create database entry
        const portfolioImage = await createPortfolioImage({
          fileKey: key,
          url,
          title: input.title,
          category: input.category,
          description: input.description,
          displayOrder: input.displayOrder,
          mimeType: input.file.type || "image/jpeg",
          fileSize: input.file.size,
          uploadedBy: ctx.user.id,
        });

        return {
          success: true,
          image: portfolioImage,
          url,
        };
      } catch (error) {
        console.error("Upload failed:", error);
        throw new Error("Failed to upload image");
      }
    }),
});
