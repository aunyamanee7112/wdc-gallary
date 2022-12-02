import React from "react";
import { motion } from "framer-motion";
const Description = ({ title, ...props }: { title?: string }) => {
  return (
    <motion.div
      transition={{ duration: 2 }}
      className="z-10 fixed bottom-6 text-center uppercase  p-5 w-[350px] h-[140px] bg-white border-black border"
    >
      {title}
    </motion.div>
  );
};

export default Description;
