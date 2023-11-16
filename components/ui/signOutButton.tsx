"use client";
import React from "react";
import { Button } from "./button";
import { signOut } from "next-auth/react";

const SignOutButton = () => {
  return (
    <Button className=" font-bold" onClick={() => signOut()}>
      Sign out
    </Button>
  );
};

export default SignOutButton;
