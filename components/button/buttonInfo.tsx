import React from "react";

type Props = {
  onClick: () => void;
};
const ButtonInfo = ({ onClick }: Props) => {
  return (
    <button
      className="border capitalize text-sm bg-white border-black py-2 px-4 hover:bg-black hover:text-white cursor-pointer"
      onClick={onClick}
    >
      info
    </button>
  );
};

export default ButtonInfo;
