import React, { useState } from "react";
import { IGalleryProps } from "types/gridLayout";
import ImageLink from "../imageLink";
import styles from "@/styles/GridLayout.module.css";
import classNames from "classnames";
import { motion } from "framer-motion";
import Description from "../description";
type Props = {
  images: IGalleryProps[];
};
const GridLayout = ({ images }: Props) => {
  const [title, settitle] = useState("test");
  const [visible, setvisible] = useState(false);
  const handleDescription = (title?: string) => {
    setvisible((prev) => !prev);
    title && settitle(title);
  };
  return (
    <div className="relative h-[100vh] flex justify-center items-center">
      <div
        id="grid-container"
        className={classNames(
          "flex justify-center items-center w-[2110px] h-[1600px] absolute visible",
          styles.gridContainer
        )}
      >
        <div className="grid grid-cols-5">
          {images.map((item, key) => (
            <motion.div
              key={key}
              id="element"
              className="w-[420px] h-[400px]  px-8 py-12 cursor-pointer"
              whileHover={{ scale: 1.2 }}
              transition={{ delay: 0.3, duration: 0.3 }}
            >
              <div id="thumbnail-wrapper" className="relative w-full h-full">
                <ImageLink index={key} src={item.image} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {visible && <Description title={title} />}
    </div>
  );
};

export default GridLayout;
