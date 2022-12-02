import React from "react";
import { motion } from "framer-motion";
type Props = {
  src: string;
  index: number;
};
const ImageLink = ({ src, index }: Props) => {
  return (
    <motion.img
      className="w-full h-full object-contain"
      // layoutId={`container-${index}`}
      // transition={{ duration: 0.5 }}
      src={src}
      alt=""
    />
  );
};

export default ImageLink;
