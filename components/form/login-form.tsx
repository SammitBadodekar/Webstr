"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { BsGoogle } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { signIn, signOut } from "next-auth/react";
import { useState } from "react";
import { toast } from "sonner";

const FormSchema = z.object({
  email: z.string().email({
    message: "Enter a valid email",
  }),
});

export function LoginForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema as any),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsSubmitting(true);
    toast.promise(
      signIn("email", {
        email: data.email,
        redirect: false,
      }),
      {
        loading: "Loading...",
        success: "An Email is sent to your address",
        error: "Something went wrong , please try again",
        finally() {
          setIsSubmitting(false);
        },
      },
    );
  }

  return (
    <Form {...form}>
      <div className=" flex flex-col gap-4 rounded-xl bg-secondaryLightTheme p-8 shadow-xl dark:bg-darkGray">
        <h1 className=" text-center text-xl font-bold sm:px-8 sm:text-2xl">
          Welcome Back !!
        </h1>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className=" flex flex-col gap-4 pt-4"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="john.doe@mail.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="flex items-center gap-2 font-semibold"
            disabled={isSubmitting}
            size="sm"
          >
            <span>
              <SiGmail />
            </span>{" "}
            Email
          </Button>
        </form>

        <div className="flex w-full items-center justify-between gap-4 pt-4">
          <Button
            onClick={() => signIn("google")}
            className="flex w-full items-center gap-2 font-semibold"
            size="sm"
          >
            <BsGoogle />
            Google
          </Button>
          <Button
            onClick={() => signIn("github")}
            className="flex w-full items-center gap-2 font-semibold"
            size="sm"
          >
            <FaGithub />
            Github
          </Button>
        </div>
      </div>
    </Form>
  );
}
