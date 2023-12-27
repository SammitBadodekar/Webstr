import Sidebar from "./sidebar";
import Header from "./header";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession();
  return (
    <main className="flex h-[100dvh] flex-col">
      <Header />
      <div className="h-full">
        <Sidebar />
      </div>
    </main>
  );
}
