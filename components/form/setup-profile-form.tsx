"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { LiaSpinnerSolid } from "react-icons/lia";
import axios from "axios";

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export type SetupProfileResponse = {
  message: string;
  username: string;
  success: boolean;
};

export default function SetupProfileForm() {
  const { update, data: session } = useSession();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema as any),
    defaultValues: {
      username: session?.user?.name || "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsLoading(true);

    toast.promise(
      axios.put("/api/users/setup-profile", {
        username: data.username,
      }),
      {
        loading: "Saving...",
        success: async (data) => {
          await update({ name: data.data.username });
          setIsLoading(false);
          router.push("/");
          return (
            <div>
              Username changed to{" "}
              <span className="font-semibold">{data.data.username}</span>
            </div>
          );
        },
        error: "Error",
      },
    );
  }

  return (
    <Form {...form}>
      <div className=" flex h-[100dvh] w-full items-center justify-center">
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className=" bg-secondaryLightTheme dark:bg-darkGray flex flex-col gap-8 rounded-2xl p-6 px-12 shadow-xl"
        >
          <h1 className=" text-center text-2xl font-bold">Set Your Username</h1>
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="john doe" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isLoading}>
            {isLoading ? (
              <>
                <div className=" animate-spin">
                  <LiaSpinnerSolid />
                </div>
              </>
            ) : (
              <>
                <span className=" text-lg"></span>
                Save
              </>
            )}
          </Button>
        </form>
      </div>
    </Form>
  );
}
