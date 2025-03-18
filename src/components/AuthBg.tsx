import React from 'react'
import Goback from './Goback';
import Image from "next/image";

const AuthBg = () => {
  return (
    <div className="fixed hidden lg:flex items-center justify-center top-0 left-0 h-screen w-[50%]">
      <Image
        src={"/Traffic Light.png"}
        alt=""
        width={350}
        height={350}
        className="object-contain "
      />
    </div>
  );
}

export default AuthBg
