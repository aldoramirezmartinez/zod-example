import { z } from "zod";

export const loginSchema = z.object({
  body: z.object({
    email: z.string().min(1).email({
      message: "Write a correct email",
    }),
    password: z.string().min(6, "password too short"),
  }),
});
