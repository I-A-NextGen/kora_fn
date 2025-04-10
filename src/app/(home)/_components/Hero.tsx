import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { LogIn, Pen } from "lucide-react";
import Link from "next/link";

import CarsSvg from "./CarsSvg";
import { IoStarSharp } from "react-icons/io5";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-clip bg-gradient-to-br from-primary/30 from-0% via-white via-40% to-primary/15 px-[5%] pt-40 pb-10  md:pt-28 lg:px-[10%]" id="home">
      <CarsSvg className="absolute left-0 top-0 -z-10" />
      <div className="flex flex-col items-center justify-center gap-12 text-center sm:w-[95%] md:w-[85%] lg:w-[85%] xl:w-[75%]">
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
        <div className="flex w-[95%] flex-col gap-4 sm:w-[80%] lg:w-[100%] xl:w-[80%]">
          <p>
            Kwisonga mugutanga ubumenyi mumategeko y&apos;umuhanda no kugutegura
            gukora Ikizamini
          </p>
          <p>
            Umusamariya ni urubuga (ishuri) rwashyiriweho gufasha
            abanyarwanda bose kumenya no gusobanukirwa amategeko y&apos;umuhanda
            mu rwego rwo guteza imbere umutekano wo mu muhanda.
          </p>
        </div>
        <div className="flex  w-[16rem] sm:w-fit flex-col gap-5 sm:flex-row">
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
          <GetStarted />
        </div>
      </div>
    </div>
  );
};

export default Hero;
