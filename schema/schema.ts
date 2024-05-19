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


enum Roles {
  ADMINISTRATOR = "ADMINISTRATOR",
  TOUR_GUIDE = "TOUR_GUIDE",
  CUSTOMER = "CUSTOMER",
}

enum Gender {
  MALE = "MALE",
  FEMALE = "FEMALE",
}

export const profileSchema =z.object({
  id: z.string(),
  gender: z.nativeEnum(Gender),
  fullname: z.string(),
  address: z.string(),
  phoneNumber: z.string(),
  image: z.any().optional(),
  userId: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
})

export const usersSchema = z.object({
  id: z.string(),
  email: z.string().email(),
  role: z.nativeEnum(Roles),
  profile: profileSchema,
});