import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { LogIn, Pen } from "lucide-react";
import Link from "next/link";
import React from "react";
import CarsSvg from "./CarsSvg";
import { IoStarSharp } from "react-icons/io5";

const Hero = () => {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-clip bg-gradient-to-br from-primary/30 from-0% via-white via-40% to-primary/15 pt-20 px-[5%] lg:px-[10%]">
      <CarsSvg className="absolute left-0 top-0 -z-10" />
      <div className="flex flex-col items-center justify-center gap-12 text-center lg:w-2/3">
        <Badge
          variant="outline"
          className="w-fit gap-1.5 rounded-3xl border border-primary px-6 py-2 text-sm text-primary sm:text-base"
        >
          <IoStarSharp className="text-lg text-yellow-500" />
          <span>Ni Ubuntu, ku nshuro ya mbere.</span>
        </Badge>
        <h1 className="text-primary">
          Gerageza ubumenyi bwawe mu mategeko y&apos;umuhanda,
        </h1>
        <div className="w-[95%] sm:w-[80%] flex flex-col gap-4">
          <p>
            Kwisonga mugutanga ubumenyi mumategeko y&apos;umuhanda no kugutegura
            gukora ikizamini
          </p>
          <p>
            Umusamariya ni urubuga (ishuri) rwashyiriweho gufasha
            abanyarwanda bose kumenya no gusobanukirwa amategeko y&apos;umuhanda
            mu rwego rwo guteza imbere umutekano wo mu muhanda.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-5">
          <Button
            variant={"outline"}
            size={"lg"}
            className="h-12 cursor-pointer rounded-3xl border-primary bg-primary/15 text-primary"
            asChild
          >
            <Link href="/auth/signup">
              <LogIn />
              <span>Iyandikishe</span>
            </Link>
          </Button>
          <Button
            variant={"default"}
            className="h-12 cursor-pointer rounded-3xl bg-primary"
            size={"lg"}
            asChild
          >
            <Link href="/auth/login">
              <Pen />
              Tangira Isuzuma
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
