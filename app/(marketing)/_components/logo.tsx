import Image from "next/image";
import { Poppins } from "next/font/google";
import React from "react";

import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const Logo = () => {
  return (
    <div className="hidden items-center gap-x-2 md:flex">
      <Image
        src="/logo.svg"
        alt="Logo"
        height="40"
        width="40"
        className="dark:hidden"
      />
      <Image
        src="/logo-dark.svg"
        alt="Logo"
        height="40"
        width="40"
        className="hidden dark:block"
      />
      <p className={cn("font-semibold", font.className)}>Potion</p>
    </div>
  );
};

export default Logo;
