import Image from "next/image";
import React from "react";
type Props = {
  onClick: () => void;
};
const ButtonTemplate = ({ onClick }: Props) => {
  return (
    <button
      className="right-5 border z-10 fixed border-black p-2 cursor-pointer"
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
