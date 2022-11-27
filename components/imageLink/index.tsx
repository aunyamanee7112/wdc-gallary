import React from "react";
import Image from "next/image";
type Props = {
  src: string;
};
const ImageLink = ({ src }: Props) => {
  return (
    <div>
      <Image src={src} alt="" quality={100} />
    </div>
  );
};

export default ImageLink;
