import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Login | Webstr",
};

export default function AuthLayout({ children }: { children: ReactNode }) {
  return <div className="bg-background">{children}</div>;
}
