import Link from "next/link";

const Logo = ({ link }: { link: boolean }) => {
  if (link) {
    return (
      <Link href={"/"}>
        <p className="text-xl font-bold text-primary md:text-2xl">KORA</p>
      </Link>
    );
  }
  return <p className="text-xl font-bold text-primary md:text-2xl">KORA</p>;
};

export default Logo;
