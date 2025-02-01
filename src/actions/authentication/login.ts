"use server";

import { signIn, signOut } from "@/auth";
import { LoginSchema } from "@/schemas";
import { AuthError } from "next-auth";
import * as z from "zod";

export type LoginTypes = "credentials" | "github";

export const login = async (
  type: LoginTypes,
  values?: z.infer<typeof LoginSchema>,
) => {
  try {
    if (type !== "credentials" || !values) {
      await signIn(type, {
        redirectTo: "/app/dashboard",
      });
      return;
    }

    const parsedValues = LoginSchema.safeParse(values);

    if (!parsedValues.success) {
      return { error: "Invalid data!" };
    }

    const { email, password } = values;
    await signIn(type, { email, password, redirectTo: "/app/dashboard" });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials!" };
        case "CallbackRouteError":
          return { error: error.cause?.err?.toString() };
        default:
          return { error: "Somtehing went wrong!" };
      }
    }
    throw error;
  }
};

export async function logout() {
  await signOut({ redirectTo: "/login" });
}
