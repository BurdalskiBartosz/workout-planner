"use client";
import { login } from "@/actions/authentication/login";
import Input from "@/components/ui/Input";
import { LoginSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

export default function LoginForm() {
  const [isPending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: z.infer<typeof LoginSchema>) {
    startTransition(() => {
      login("credentials", data);
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5">
        <Input
          disabled={isPending}
          label="Email"
          placeholder="Enter your email..."
          error={errors.email?.message}
          {...register("email")}
        />
        <Input
          disabled={isPending}
          label="Password"
          placeholder="Enter your password..."
          error={errors.password?.message}
          {...register("password")}
        />
        <button
          type="submit"
          className="mt-6 rounded-lg bg-black p-3 text-white"
        >
          Sign in
        </button>
      </form>
      <button
        className="bg-red-500 mt-1 rounded p-2"
        onClick={() => {
          signIn("github", {
            callbackUrl: "/app/dashboard",
          });
        }}
      >
        Github
      </button>
    </>
  );
}
