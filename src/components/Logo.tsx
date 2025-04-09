import Image from "next/image";
import Link from "next/link";

const Logo = ({
  className,
  link = true,
  blueLogo = true,
}: {
  className?: string
  link?: boolean;
  blueLogo?: boolean;
}) => {
  if (link) {
    return (
      <Link href={"/"}>
        <div className={`relative h-9 w-36 md:w-40 lg:w-48 ${className}`}>
          <Image
            src={blueLogo ? "/Umusamariyadark.png" : "/Umusamariya.png"}
            alt="logo"
            fill
            className="object-contain"
          />
        </div>
      </Link>
    );
  }
  return (
    <div className={`relative h-9 w-36 md:w-40 lg:w-48 ${className}`}>
      <Image
        src={"/Umusamariyadark.png"}
        alt="logo"
        fill
        className="object-contain"
      />
    </div>
  );
};

export default Logo;
