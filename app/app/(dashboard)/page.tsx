import Link from "next/link";
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
    <>
      {/* <div className="flex h-max w-full flex-col items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-700 p-8 text-lightTheme dark:via-blue-800 dark:to-blue-900 md:gap-4">
        <h2 className="text-xl font-semibold md:text-3xl">
          Instant websites, minimal effort
        </h2>
        <div className="relative -my-2 h-fit w-11/12 max-w-2xl shadow-2xl drop-shadow-2xl md:my-0 md:w-4/6">
          <Input
            className="pl-8"
            placeholder="Describe your website, components, templates"
          />
          <GrSearchAdvanced className="absolute left-2 top-3" />
        </div>

        <div className="no-scrollbar flex w-full flex-nowrap justify-around overflow-x-auto p-1 md:my-0 2xl:justify-center 2xl:gap-8">
          <Item text="AI site maker" link="/">
            <RiBardFill className="text-lg text-blue-500 md:text-2xl" />
          </Item>
          <Item text="AI components" link="/">
            <LuComponent className="text-lg text-red-700 md:text-2xl" />
          </Item>
          <Item text="Website" link="/create">
            <MdWeb className="text-lg text-purple-900 md:text-2xl" />
          </Item>
          <Item text="Templates" link="/">
            <LuLayoutTemplate className="text-lg text-yellow-600 md:text-2xl" />
          </Item>
          <Item text="Market place" link="/">
            <FaShop className="text-lg text-green-800 md:text-2xl" />
          </Item>
          <Item text="Portfolios" link="/">
            <BiCollection className="text-lg text-green-800 md:text-2xl" />
          </Item>
        </div>
      </div> */}

      <div className="flex w-full flex-col items-center gap-4 p-4">
        <h2 className="self-start text-2xl font-semibold">Recent Projects</h2>
        <div className="flex w-full flex-col items-center gap-4 p-8">
          <Image
            width={40}
            height={40}
            alt="image"
            src="/man-on-a-bicycle.svg"
            className="h-64 w-full pr-8 dark:invert"
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
    </>
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
      <div className="flex w-fit flex-col items-center justify-center rounded-full bg-lightTheme p-2 md:p-3">
        {children}
      </div>
      {text}
    </Link>
  );
};
