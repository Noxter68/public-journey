import { z } from "zod";

export const waitlistSchema = z.object({
  email: z.string().email("Invalid email address"),
  projectName: z.string().min(1, "Project name is required").max(100),
  projectStage: z.enum(["idea", "building", "private_beta", "public_beta", "launched"] as const, {
    error: "Project stage is required",
  }),
  twitterHandle: z.string().max(50).optional().or(z.literal("")),
  projectDescription: z.string().max(500).optional().or(z.literal("")),
  hypeScore: z.number().int().min(1).max(5).optional(),
});

export type WaitlistFormData = z.infer<typeof waitlistSchema>;
