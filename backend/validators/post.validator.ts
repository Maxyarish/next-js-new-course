import z from "zod";

export const createPostSchema = z.object({
  name: z.string().min(1),
  title: z.string().min(1),
  description: z.string().min(1),
  createdAt: z.date().optional(),
});