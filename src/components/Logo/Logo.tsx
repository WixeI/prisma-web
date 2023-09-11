import Image, { ImageProps } from "next/image";
import logo from "public/Logo.svg";
import { FC, ImgHTMLAttributes } from "react";

type Props = {
  className?: string;
};

const Logo: FC<Props> = ({ className }) => {
  return (
    <h1>
      <Image
        src={logo}
        alt=""
        className={` ${className}`}
        data-testid="navbar-logo-image"
      />
      <span className="sr-only">Prisma Web</span>
    </h1>
  );
};

export default Logo;
