import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className="relative flex flex-col items-center justify-center">
      <Image
        src="/cute-bunny.svg"
        width={100}
        height={100}
        alt="trash"
        className="h-80 w-full"
      />
      <div className="absolute top-4 -z-10 h-80 w-80 rounded-full bg-gray-300"></div>
      <h2 className="font-logo mt-12 text-3xl">Your trash will be here</h2>
    </div>
  );
};

export default Page;
