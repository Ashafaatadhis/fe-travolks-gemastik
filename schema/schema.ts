import { z } from "zod";

export const SchemaInput = z.object({
  email: z.string().email({
    message: "Enter a valid email address.",
  }),
  password: z.string().min(3, {
    message: "Password must be at least 3 characters.",
  }),
});

export type FormInput = z.infer<typeof SchemaInput>;

