"use server";
import { RegistrationSchema } from "@/schemas";
import * as z from "zod";

export async function register(values: z.infer<typeof RegistrationSchema>) {
  try {
    const parsedValues = RegistrationSchema.safeParse(values);

    if (!parsedValues.success) {
      return { error: "Invalid data!" };
    }

    console.log(values);

    return { success: "Email sent!" };
  } catch (error) {
    throw error;
  }
}
