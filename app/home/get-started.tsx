"use client";
import React from "react";
import { SparklesCore } from "./sparkles";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function GetStarted() {
  return (
    <div className="relative flex h-[40rem] w-full flex-col items-center justify-center overflow-hidden rounded-md bg-lightTheme">
      <div className="absolute inset-0 h-screen w-full">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={50}
          className="h-full w-full"
          particleColor="#000"
        />
      </div>
      <Button
        variant="default"
        className="z-50 h-fit w-fit  bg-darkTheme text-lightTheme"
        size="lg"
        asChild
      >
        <Link href="/dfgdf"> Get Started</Link>
      </Button>
    </div>
  );
}
