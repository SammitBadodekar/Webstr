import Header from "./header";
import Sidebar from "./sidebar";

export default async function Home() {
  return (
    <main className="flex h-[100dvh] w-full flex-col">
      <Header />
      <div className="flex h-full w-full">
        <Sidebar />
        <div className="w-full p-4">
          <div className=" h-40 w-full bg-blue-400"></div>
        </div>
      </div>
    </main>
  );
}
