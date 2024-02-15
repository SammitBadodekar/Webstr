"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useState } from "react";
import { FaCrown } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const ProPlanBanner = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div
      className={`${
        isOpen ? "" : "h-0 scale-0 transition-all"
      } relative mx-auto mb-2 mt-auto flex w-11/12 flex-col items-center gap-4 rounded-xl bg-background p-4`}
    >
      <button onClick={() => setIsOpen(false)}>
        <IoClose className="absolute right-3 top-3" />
      </button>

      <div className="flex items-center justify-center gap-2 rounded-md text-lg font-bold transition-colors ease-in">
        <p className=" pb-1 text-yellow-500">
          <FaCrown />
        </p>

        <p>Get Webstr Pro</p>
      </div>
      <p className=" text-center text-sm">
        Join the Webstr Pro plan to unlock custom domains, 100k tokens / month,
        and more.
      </p>
      <Button asChild className="">
        <Link href="/pro">Upgrade</Link>
      </Button>
    </div>
  );
};

export default ProPlanBanner;
