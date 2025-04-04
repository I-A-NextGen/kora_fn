import Goback from "./GoBack";
import Image from "next/image";

const AuthBg = () => {
  return (
    <div className="fixed left-0 top-0 hidden h-screen w-[50%] items-center justify-center lg:flex">
      <Image
        src={"/Traffic Light.png"}
        alt=""
        width={350}
        height={350}
        className="object-contain"
      />
    </div>
  );
};

export default AuthBg;
