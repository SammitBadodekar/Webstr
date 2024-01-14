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
import { BiCollection } from "react-icons/bi";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default async function Home() {
  return (
    <main className="flex h-[100dvh] w-full flex-col">
      <Header />
      <div className="flex h-full w-full overflow-hidden">
        <Sidebar />
        <div className="flex h-full w-full flex-col gap-8 overflow-y-scroll p-4">
          <div className="flex h-64 w-full flex-col items-center justify-around gap-0 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-700 text-lightTheme dark:via-blue-800 dark:to-blue-900 md:gap-4 md:p-4">
            <h2 className="text-2xl font-semibold md:text-4xl">
              What will you use today?
            </h2>
            <div className="relative -my-2 h-fit w-11/12 md:my-0 md:w-4/6">
              <Input
                className="pl-8"
                placeholder="Describe your website, components, templates"
              />
              <GrSearchAdvanced className="absolute left-2 top-3" />
            </div>

            <div className="no-scrollbar -my-2 flex w-full justify-around overflow-x-scroll p-1 md:my-0">
              <Item text="AI site maker" link="/">
                <RiBardFill className="text-xl text-blue-500" />
              </Item>
              <Item text="AI components" link="/">
                <LuComponent className="text-xl text-red-700" />
              </Item>
              <Item text="Website" link="/create">
                <MdWeb className="text-xl text-purple-900" />
              </Item>
              <Item text="Templates" link="/">
                <LuLayoutTemplate className="text-xl text-yellow-600" />
              </Item>
              <Item text="Market place" link="/">
                <FaShop className="text-xl text-green-800" />
              </Item>
              <Item text="Portfolios" link="/">
                <BiCollection className="text-xl text-green-800" />
              </Item>
            </div>
          </div>

          <div className="flex w-full flex-col items-center">
            <h2 className="self-start text-2xl font-semibold">
              Recent Projects
            </h2>
            <div className="flex w-full flex-col items-center gap-4 p-8">
              <Image
                width={40}
                height={40}
                alt="image"
                src="/undraw_awesome_rlvy.svg"
                className="h-40 w-full pr-8"
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
    <Link
      href={link}
      className="flex flex-shrink-0 flex-col items-center rounded-xl p-2 text-sm"
    >
      <div className="flex w-fit flex-col items-center justify-center rounded-full bg-lightTheme p-2">
        {children}
      </div>
      {text}
    </Link>
  );
};
