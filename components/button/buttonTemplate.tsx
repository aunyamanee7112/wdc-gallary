import Image from "next/image";
import React from "react";
type Props = {
  onClick: () => void;
};
const ButtonTemplate = ({ onClick }: Props) => {
  return (
    <button
      className="border bg-white border-black p-2 cursor-pointer"
      onClick={onClick}
    >
      <Image
        src="/icons/menu.png"
        className="cursor-pointerur"
        quality={100}
        alt=""
        width={24}
        height={24}
      />
    </button>
  );
};

export default ButtonTemplate;
