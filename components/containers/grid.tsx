import React from "react";
import { IGalleryProps } from "types/gridLayout";
import ImageLink from "../imageLink";

type Props = {
  images: IGalleryProps[];
};
const GridLayout = ({ images }: Props) => {
  return (
    <div className="relative h-full flex justify-center items-center">
      <div
        id="grid-container"
        className="flex justify-center items-center w-[2110px] h-[1600px]
          absolute visible top-[calc((100vh-1600px)/2) left-[calc((100vw-2110px)/2)]]"
      >
        {/* className="grid grid-cols-[repeat(5,420px)] */}
        <div id="grid-element" className="grid grid-cols-5">
          {images.map((item, key) => (
            <div
              key={key}
              id="element"
              className="w-[420px] h-[400px] relative  border px-8 py-12"
            >
              <div id="thumbnail-wrapper" className="relative">
                <ImageLink index={key} src={item.image} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GridLayout;
