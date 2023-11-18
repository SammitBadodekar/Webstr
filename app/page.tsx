import Sidebar from "@/components/ui/sidebar";
import Header from "@/components/ui/header";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession();
  return (
    <main className=" flex flex-col">
      <Header />
      <div className="">
        <Sidebar />
      </div>
    </main>
  );
}
