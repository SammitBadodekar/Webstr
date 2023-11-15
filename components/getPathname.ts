"use client";

import { usePathname } from "next/navigation";

const getPathname = () => {
  const pathname = usePathname();
  return pathname;
};

export default getPathname;
