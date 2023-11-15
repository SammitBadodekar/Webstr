import Sidebar from "@/components/ui/sidebar";
import Header from "@/components/ui/header";

export default async function Home() {
  return (
    <main className=" flex flex-col">
      <Header />
      <div className="">
        <Sidebar />
      </div>
    </main>
  );
}
