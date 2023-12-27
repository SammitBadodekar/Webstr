import Image from "next/image";
import LoginButton from "./login-button";
import { Suspense } from "react";
import { getServerSession } from "next-auth";
import { LoginForm } from "@/components/form/login-form";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export default async function LoginPage() {
  const session = await getServerSession();

  console.log(session?.user);
  return (
    <div className="login flex h-[100dvh] w-full items-center justify-center">
      {/* <ThemeToggle /> */}
      <LoginForm />
    </div>
  );
}
