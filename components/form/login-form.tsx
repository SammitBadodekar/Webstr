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
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { signIn, signOut } from "next-auth/react";
import { useState } from "react";
import { toast } from "sonner";
import { Separator } from "../ui/separator";

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
      <div className=" flex min-h-[20rem] flex-col gap-4 rounded-xl bg-white/50 p-8 shadow-xl  dark:bg-black/50 sm:min-w-[30rem]">
        <h1 className="font-logo w-full text-center text-5xl font-black ">
          Webstr
        </h1>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className=" flex flex-col gap-4 pt-8"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                {/* <FormLabel>Email</FormLabel> */}
                <FormControl>
                  <Input
                    placeholder="sammit.badodekar@example.com"
                    {...field}
                    className="h-[3rem] p-2"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="flex items-center gap-2 text-[1.05rem] font-medium"
            disabled={isSubmitting}
            size="lg"
          >
            <span>
              <SiGmail />
            </span>{" "}
            Email
          </Button>
        </form>
        <div className="flex w-full items-center gap-2">
          <Separator className="h-[0.1rem] w-[45%] bg-black/30 dark:bg-white/30" />
          <p>OR</p>
          <Separator className="h-[0.1rem] w-[45%] bg-black/30 dark:bg-white/30" />
        </div>
        <div className="flex w-full items-center justify-between gap-4 pt-4">
          <Button
            onClick={() => signIn("google")}
            className="flex w-full items-center gap-2 text-[1.05rem] font-medium"
            size="lg"
          >
            <BsGoogle />
            Google
          </Button>
          <Button
            onClick={() => signIn("github")}
            className="flex w-full items-center gap-2 text-[1.05rem] font-medium"
            size="lg"
          >
            <FaGithub />
            Github
          </Button>
        </div>
      </div>
    </Form>
  );
}
