"use client";

import { SessionProvider } from "next-auth/react";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/theme-provider";
import { RecoilRoot } from "recoil";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <RecoilRoot>
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
          <Toaster theme="system" />
        </ThemeProvider>
      </RecoilRoot>
    </SessionProvider>
  );
}
