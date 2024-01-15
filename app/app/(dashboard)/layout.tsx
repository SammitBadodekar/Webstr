import { ReactNode, Suspense } from "react";
import Header from "./header";
import Sidebar from "./sidebar";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <main className="flex h-[100dvh] w-full flex-col bg-background">
      <Header />
      <div className="flex h-full w-full overflow-hidden">
        <Sidebar />
        <div className="flex h-full w-full flex-col gap-8 overflow-y-scroll p-4 pl-0">
          {children}
        </div>
      </div>
    </main>
  );
}
