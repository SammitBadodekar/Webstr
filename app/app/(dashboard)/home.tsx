"use client";

import Header from "./header";
import { useState } from "react";

export default async function Home({ sidebar }: { sidebar: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <main className="flex h-[100dvh] flex-col">
      <Header setIsSidebarOpen={setIsSidebarOpen} />
      <div className="h-full">{sidebar}</div>
    </main>
  );
}
