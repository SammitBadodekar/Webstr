import { LoginForm } from "@/components/forms/loginForm";
import React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const LoginPage = async () => {
  const session = await getServerSession();

  if (session?.user) {
    if (session?.user?.name) redirect("/");
    if (!session?.user?.name) redirect("/setup-profile");
  }

  return (
    <div className=" flex h-[100dvh] w-full items-center justify-center">
      <LoginForm />
    </div>
  );
};

export default LoginPage;
