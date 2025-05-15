"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { RegistrationSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import TextField from "../Inputs/TextField";

type RegistrationFormType = z.infer<typeof RegistrationSchema>;

export default function RegistrationForm() {
  const form = useForm<RegistrationFormType>({
    resolver: zodResolver(RegistrationSchema),
  });

  const onSubmit = (data: RegistrationFormType) => {
    console.log(data);
  };

  return (
    <Card className="mx-auto w-[400px]">
      <CardHeader>
        <CardTitle>Sign up</CardTitle>
        <CardDescription>Fill the form to create an account.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            <TextField<RegistrationFormType>
              control={form.control}
              name="login"
              label="Login"
              placeholder="Enter your login..."
            />
            <TextField<RegistrationFormType>
              control={form.control}
              name="email"
              label="Email"
              placeholder="Enter your email..."
            />
            <TextField<RegistrationFormType>
              control={form.control}
              name="password"
              label="Password"
              type="password"
              placeholder="Enter your password..."
            />
            <TextField<RegistrationFormType>
              control={form.control}
              name="confirmPassword"
              label="Confirm password"
              type="password"
              placeholder="Confirm password..."
            />

            <Button type="submit" className="r mt-2 w-full">
              Sign up
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
