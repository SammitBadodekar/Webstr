import Image from "next/image";
import React from "react";

const ComingSoon = () => {
  return (
    <div className=" relative flex flex-col items-center justify-center">
      <Image
        src="/page-under-construction.svg"
        width={100}
        height={100}
        alt="coming soon"
        className="h-80 w-full dark:invert"
      />
      <h2 className="font-logo pt-12 text-2xl font-semibold">
        Hold onto your hats – excitement is on its way!
      </h2>
    </div>
  );
};

export default ComingSoon;
