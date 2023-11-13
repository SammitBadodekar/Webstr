"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { BsGoogle } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { LiaSpinnerSolid } from "react-icons/lia";
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
import { toast } from "@/components/ui/use-toast";
import { signIn, signOut } from "next-auth/react";
import { useState } from "react";

const FormSchema = z.object({
  email: z.string().email({
    message: "Enter a valid email",
  }),
});

export function LoginForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsSubmitting(true);
    signIn("email", {
      email: data.email,
    });
  }

  return (
    <Form {...form}>
      <div className=" flex flex-col gap-4 rounded-2xl bg-secondaryLightTheme p-8 shadow-xl dark:bg-darkGray sm:px-16">
        <h1 className=" text-center text-xl font-black sm:px-8 sm:text-2xl">
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
            className="flex items-center gap-2 font-extrabold"
          >
            {isSubmitting ? (
              <>
                <div className=" animate-spin">
                  <LiaSpinnerSolid />
                </div>
              </>
            ) : (
              <>
                <span className=" text-lg">
                  <SiGmail />
                </span>{" "}
                Login with email
              </>
            )}
          </Button>
        </form>
        <p className=" text-center font-bold">OR</p>
        <Button
          onClick={() => signIn("google")}
          className="flex items-center gap-2 font-extrabold"
        >
          <BsGoogle />
          Login with Google
        </Button>
      </div>
    </Form>
  );
}
