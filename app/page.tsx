import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/themeToggle";
import Image from "next/image";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession();
  console.log(session);
  return (
    <main className=" flex min-h-screen flex-col items-center justify-between p-24">
      <div className=" flex h-full w-full items-center gap-4 rounded-2xl bg-secondaryLightTheme p-10 shadow-lg dark:bg-darkGray">
        <ThemeToggle />
        <p>
          <b className=" text-2xl">laWeb:</b> Open source website builder
        </p>
        <p>user: {session?.user?.name}</p>
      </div>
    </main>
  );
}
