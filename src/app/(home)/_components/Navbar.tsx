import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav
      className="relative flex py-4 items-center px-16 justify-between bg-white font-mono text-black shadow-sm"
      role="navigation"
    >
      <span>Logo</span>
      <div className="flex items-center flex-row gap-4">
        <div className="flex items-centerflex-row gap-4">
            <Link href="/">Ahabanza</Link>
            <Link href="/">Amakuru</Link>
            <Link href="/">Sobanukirwa</Link>
        </div>
        <div className="flex items-center flex-row gap-4">
          <Button variant={"outline"} size={"lg"} asChild>
            <Link href="/auth/signup">Iyandikishe</Link>
          </Button>
          <Button variant={"default"} size={"lg"} asChild>
            <Link href="/auth/login">Tangira</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
