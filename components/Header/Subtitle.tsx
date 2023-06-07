"use client";

import { pagesData } from "@/pagesData";
import { usePathname } from "next/navigation";

const Subtitle = () => {
  const pathname = usePathname();
  return (
    <span className={pagesData[pathname].className}>
      {pagesData[pathname].subtitle}
    </span>
  );
};

export default Subtitle;
