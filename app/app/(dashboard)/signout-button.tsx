"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

const SignOutButton = () => {
  return (
    <Button size="sm" className=" font-bold" onClick={() => signOut()}>
      Sign out
    </Button>
  );
};

export default SignOutButton;
