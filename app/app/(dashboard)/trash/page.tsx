import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className="relative flex flex-col items-center justify-center">
      <Image
        src="/cute-dog-with-a-bone.svg"
        width={100}
        height={100}
        alt="trash"
        className="h-80 w-full dark:invert"
      />
      <h2 className="font-logo mt-12 text-3xl">Your trash will be here</h2>
    </div>
  );
};

export default Page;
