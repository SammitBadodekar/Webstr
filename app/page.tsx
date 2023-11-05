import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/themeToggle";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" flex min-h-screen flex-col items-center justify-between bg-lightTheme p-24 dark:bg-darkTheme">
      <div className=" flex h-full w-full items-center gap-4 rounded-2xl bg-secondaryLightTheme p-10 shadow-lg dark:bg-darkGray">
        <ThemeToggle />
        <p>
          <b>laWeb:</b> Open source website builder
        </p>
      </div>
    </main>
  );
}
