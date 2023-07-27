import { FC } from "react";
import Image from "next/image";

interface Props {
  src: string;
  alt: string;
}
const BrandLogo: FC<Props> = ({ src, alt }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width="0"
      height="0"
      sizes="100vw"
      className="grayscale"
    />
  );
};

export default BrandLogo;
