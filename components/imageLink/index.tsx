import React from "react";
import Image from "next/image";
type Props = {
  src: string;
  index: number;
};
const ImageLink = ({ src, index }: Props) => {
  return <Image src={src} alt="" width={420} height={400} quality={100} />;
};

export default ImageLink;
