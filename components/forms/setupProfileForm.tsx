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
import { toast } from "@/components/ui/use-toast";
import { useSession } from "next-auth/react";
import { setupProfile } from "@/app/actions/setupProfile";
import { SetupProfileResponse } from "@/types";
import { useRouter } from "next/navigation";

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export default function SetupProfileForm() {
  const { update, data: session } = useSession();
  const router = useRouter();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    await update({ name: data.username });

    const response: SetupProfileResponse = await setupProfile(
      data.username,
      session?.user?.email!
    );

    toast({
      title: `${response.message}`,
    });

    if (response.success) {
      router.push("/");
    }
  }

  return (
    <Form {...form}>
      <div className=" flex h-[100dvh] w-full items-center justify-center">
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className=" flex flex-col gap-8 rounded-2xl bg-secondaryLightTheme p-6 px-12 shadow-xl dark:bg-darkGray"
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
          <Button type="submit">Save</Button>
        </form>
      </div>
    </Form>
  );
}
