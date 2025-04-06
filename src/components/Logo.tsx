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
            className="object-contain"
          />
        </div>
      </Link>
    );
  }
  return (
    <Link href={"/"}>
      <div className="relative h-10 w-32">
        <Image
          src={"/Umusamariyadark.png"}
          alt="logo"
          fill
          className="object-contain"
        />
      </div>
    </Link>
  );
};

export default Logo;
