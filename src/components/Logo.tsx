import Image from "next/image";
import Link from "next/link";

const Logo = ({ link }: { link: boolean }) => {
  if (link) {
    return (
      <Link href={"/"}>
        <div className="relative h-10 w-32">
          <Image
            src={"/Umusamariyadark.png"}
            alt="logo"
            fill
            className="object-contain"/>
        </div>
      </Link>
    );
  }
  return <p className="text-xl font-bold text-primary md:text-2xl">KORA</p>;
};

export default Logo;
