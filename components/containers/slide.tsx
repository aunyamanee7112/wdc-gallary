import React from "react";
import { IGalleryProps } from "types/gridLayout";
import ImageLink from "../imageLink";
import styles from "@/styles/SlideLayout.module.css";
import classNames from "classnames";
type Props = {
  images: IGalleryProps[];
};
const SlideLayout = ({ images }: Props) => {
  return (
    <div
      id="list-element"
      className={classNames(
        "h-[100vh] grid items-center overflow-x-auto overflow-y-hidden",
        styles.listElement
      )}
    >
      {images.map((item, key) => (
        <div
          key={key}
          id="element"
          className="relative w-[70vmin] h-[70vmin] mr-[5vw]  px-8 py-12"
        >
          <ImageLink index={key} src={item.image} />
        </div>
      ))}
    </div>
  );
};

export default SlideLayout;
