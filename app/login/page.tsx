"use client";

import { LoginForm } from "@/components/forms/loginForm";
import React from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const { data: session } = useSession();
  const router = useRouter();

  console.log(session?.user);

  /* if (session?.user) {
    if (session?.user?.name) 
    if (!session?.user?.name) 
  } */

  return (
    <div className=" flex h-[100dvh] w-full items-center justify-center">
      <LoginForm />
    </div>
  );
};

export default LoginPage;
