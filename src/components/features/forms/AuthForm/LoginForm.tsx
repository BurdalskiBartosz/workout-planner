"use client";
import { login } from "@/actions/authentication/login";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { LoginSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Github } from "lucide-react";
import { signIn } from "next-auth/react";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import TextField from "../Inputs/TextField";

type LoginFormType = z.infer<typeof LoginSchema>;

export default function LoginForm() {
  const [isPending, startTransition] = useTransition();

  const form = useForm<LoginFormType>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: LoginFormType) {
    startTransition(() => {
      login("credentials", data);
    });
  }

  return (
    <Card className="mx-auto w-[400px]">
      <CardHeader>
        <CardTitle>Sign in</CardTitle>
        <CardDescription>Fill the form to log in.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            <TextField<LoginFormType>
              control={form.control}
              disabled={isPending}
              name="email"
              label="Email"
              placeholder="Enter your email..."
            />
            <TextField<LoginFormType>
              control={form.control}
              disabled={isPending}
              name="password"
              label="Password"
              type="password"
              placeholder="Enter your password..."
            />

            <Button type="submit" className="w-full rounded-lg">
              Sign in
            </Button>
          </form>
        </Form>
      </CardContent>
      <Separator className="mb-6" />
      <CardFooter className="flex justify-center">
        <Button
          variant="outline"
          size="icon"
          onClick={() => {
            signIn("github", {
              callbackUrl: "/app/dashboard",
            });
          }}
        >
          <Github />
        </Button>
      </CardFooter>
    </Card>
  );
}
