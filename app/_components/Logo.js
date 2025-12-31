import Image from "next/image";
import Link from "next/link";
// image import
import imgLogo from "@/public/logo.png";

function Logo() {
  return (
    <Link href="/" className="-m-1.5 p-1.5">
      <span className="sr-only">Cantina</span>
      <Image alt="Logo cantina" src={imgLogo} className="h-9 w-auto" />
    </Link>
  );
}

export default Logo;
