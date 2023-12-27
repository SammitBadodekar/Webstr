"use client";
import React from "react";
import Header from "./header";
import Builder from "./builder";

const Page = () => {
  return (
    <div className="h-[100dvh] overflow-hidden">
      <Header />
      <Builder />
    </div>
  );
};

export default Page;
