import Logo from "@/components/Logo";
import { Instagram, Twitter, Youtube } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="grid grid-cols-3 grid-rows-2 items-center justify-between gap-y-8 bg-gray-800 px-[5%] pt-5 text-white md:grid-rows-1 md:px-16 md:py-5 lg:px-[10%]">
      <div className="col-start-1 row-start-1">
        <Logo blueLogo={false} />
      </div>
      <p className="col-start-2 row-start-2 justify-self-center text-nowrap pb-2 md:pb-0 text-sm text-gray-400 md:row-start-1">
        ©Umusamariya-2025
      </p>
      <div className="col-start-3 row-start-1 flex flex-row justify-end gap-4">
        <Twitter className="size-fit" />
        <Instagram />
        <Youtube />
      </div>
    </footer>
  );
};

export default Footer;
