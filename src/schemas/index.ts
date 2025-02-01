import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, {
    message: "Password is required",
  }),
});

export const RegistrationSchema = z
  .object({
    email: z.string().email(),
    login: z.string().min(5),
    password: z.string().regex(/[A-Z]/, {
      message: "Password has to contain at least one big letter",
    }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });
