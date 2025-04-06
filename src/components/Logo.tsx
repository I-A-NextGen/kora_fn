import Image from "next/image";
import Link from "next/link";

const Logo = ({ link }: { link: boolean }) => {
  if (link) {
    return (
      <Link href={"/"}>
        <div className="relative h-8 w-80">
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
    <div className="relative h-8 w-80">
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
