import { z } from "zod";
import { loginSchema, registrationSchema } from "@/utils/validations";

export type LoginFormType = z.infer<typeof loginSchema>;

export type RegistrationFormType = z.infer<typeof registrationSchema>;
