import Link from "next/link";
import Header from "./header";
import Sidebar from "./sidebar";
import { RiBardFill } from "react-icons/ri";
import { LuComponent } from "react-icons/lu";
import { MdWeb } from "react-icons/md";
import { LuLayoutTemplate } from "react-icons/lu";
import { Input } from "@/components/ui/input";
import { GrSearchAdvanced } from "react-icons/gr";
import { FaShop } from "react-icons/fa6";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default async function Home() {
  return (
    <main className="flex h-[100dvh] w-full flex-col">
      <Header />
      <div className="flex h-full w-full overflow-y-scroll">
        <Sidebar />
        <div className="flex h-full w-full flex-col gap-8 p-4">
          <div className="flex h-64 w-full flex-col items-center justify-around rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-700 text-lightTheme dark:via-blue-800 dark:to-blue-900">
            <h2 className="text-4xl font-medium">What will you use today?</h2>
            <div className="relative h-fit w-4/6">
              <Input
                className="pl-8"
                placeholder="Describe your website, components, templates"
              />
              <GrSearchAdvanced className="absolute left-2 top-3" />
            </div>

            <div className="flex w-full justify-around">
              <Item text="AI site maker" link="/">
                <RiBardFill className="text-3xl text-blue-500" />
              </Item>
              <Item text="AI components" link="/">
                <LuComponent className="text-3xl text-red-700" />
              </Item>
              <Item text="Website" link="/">
                <MdWeb className="text-3xl text-purple-900" />
              </Item>
              <Item text="Templates" link="/">
                <LuLayoutTemplate className="text-3xl text-yellow-600" />
              </Item>
              <Item text="Market place" link="/">
                <FaShop className="text-3xl text-green-800" />
              </Item>
            </div>
          </div>

          <div className="flex w-full flex-col items-center">
            <h2 className="self-start text-2xl font-semibold">
              Recent Projects
            </h2>
            <div className="flex w-full flex-col items-center gap-4">
              <Image
                width={40}
                height={40}
                alt="image"
                src="/undraw_awesome_rlvy.svg"
                className="h-40 w-full"
              />
              <Button
                asChild
                className="mt-4 self-center border-2 border-primary"
                variant="outline"
                size="sm"
              >
                <Link href="/create">Create a new project</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

const Item = ({
  text,
  link,
  children,
}: {
  text: string;
  link: string;
  children: React.ReactNode;
}) => {
  return (
    <Link href={link} className="flex flex-col items-center rounded-xl p-2">
      <div className="flex w-fit flex-col items-center justify-center rounded-full bg-lightTheme p-2">
        {children}
      </div>
      {text}
    </Link>
  );
};
