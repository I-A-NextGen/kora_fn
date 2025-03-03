import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { LogIn, Pen } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import CarsSvg from './CarsSvg'

const Hero = () => {
  return (
    <div className="min-h-screen overflow-clip relative flex items-center justify-center flex-col">
        <div className="absolute size-[520px] bg-blue-700 blur-[600px] top-0 -left-36 -z-10"/>
        <div className="absolute size-[520px] bg-blue-700 blur-[600px] bottom-0 -right-36 -z-10"/>
        <CarsSvg className="absolute top-0 left-0 -z-10"/>
        <div className="flex flex-col justify-center  text-center items-center md:w-2/3 gap-8 p-16">
          <Badge variant="outline" className="gap-1.5 bg-blue-500/10 backdrop-blur-xl w-fit">
            <span
              className="size-1.5 rounded-full bg-yellow-500"
              aria-hidden="true"
            ></span>
            Kora imyitozo muminota 18 gusa
          </Badge>
          <h1 className="text-blue-700 ">Gerageza ubumenyi bwawe mu mategeko y’umuhanda,</h1>
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
              
              <Link href="/auth/signup"><LogIn/>Iyandikishe</Link>
            </Button>
            <Button variant={"default"} className="bg-blue-700" size={"lg"} asChild>
              
              <Link href="/auth/login"><Pen/>Tangira</Link>
            </Button>
          </div>
        </div>
        <div className="bg-blue-500"></div>
      </div>
  )
}

export default Hero