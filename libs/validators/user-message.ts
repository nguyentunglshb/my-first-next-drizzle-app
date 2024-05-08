import { z } from "zod";

export const UserMessageValidator = z.object({
  message: z.string().optional(),
});

export type PostUserMessageRequest = z.infer<typeof UserMessageValidator>;
