import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";

const page = () => {
  return (
    <>
      <Navbar />
      <div className="grid min-h-screen grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col justify-center gap-4 p-16">
          <Badge variant="outline" className="gap-1.5 w-fit">
            <span
              className="size-1.5 rounded-full bg-blue-500"
              aria-hidden="true"
            ></span>
            Kora imyitozo muminota 18 gusa
          </Badge>
          <h1>Gerageza ubumenyi bwawe mu mategeko y’umuhanda,</h1>
          <p>
            Kwisonga mugutanga ubumenyi mumategeko y’umuhanda no kugutegura
            gukora ikizamini Nkotanyi Driving School ni urubuga (ishuri)
            rwashyiriweho gufasha abanyarwanda bose kumenya no gusobanukirwa
            amategeko y’umuhanda mu rwego rwo guteza imbere umutekano wo mu
            muhanda.
          </p>
          <small>
            Inshuro yambere ni Ubuntu, Kongera <br />
            gukora ugura code iguha ibizamini byinshi
          </small>
          <div>
            <Button variant={"outline"} size={"lg"} asChild>
              <Link href="/auth/signup">Iyandikishe</Link>
            </Button>
            <Button variant={"default"} size={"lg"} asChild>
              <Link href="/auth/login">Tangira</Link>
            </Button>
          </div>
        </div>
        <div className="bg-blue-500"></div>
      </div>
      <Footer />
    </>
  );
};

export default page;
