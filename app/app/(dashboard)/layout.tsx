import { ReactNode, Suspense } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <div className="bg-background">{children}</div>
    </div>
  );
}
