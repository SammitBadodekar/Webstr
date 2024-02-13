import { ReactNode } from "react";
import SidebarWrapper from "./sidebar-wrapper";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <main className="flex h-[100dvh] w-full overflow-hidden bg-background">
      <SidebarWrapper />
      <div className="flex h-full w-full flex-col gap-8 overflow-y-scroll p-4 md:pl-0">
        {children}
      </div>
    </main>
  );
}
