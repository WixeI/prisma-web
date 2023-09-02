import Image from "next/image";
import logo from "public/Logo.svg";

function Logo() {
  return (
    <h1>
      <Image src={logo} alt="" className="h-14" data-testid="navbar-logo-image" />
      <span className="sr-only">Prisma Web</span>
    </h1>
  );
}

export default Logo;
