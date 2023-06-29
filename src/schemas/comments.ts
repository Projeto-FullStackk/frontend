import { z } from "zod";

export const commentSchema = z.object({
  comment: z.string(),
});

export const commentResponse = z.object({
  comment: z.string(),
  adsId: z.string(),
  createdAt: z.string(),
  id: z.string(),
  userName: z.string(),
  userId: z.string(),
});

export type CommentData = z.infer<typeof commentSchema>;
export type CommentResponse = z.infer<typeof commentResponse>;
