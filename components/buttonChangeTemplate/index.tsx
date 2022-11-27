import React from "react";
type Props = {
  onClick: () => void;
};
const ButtonTemplate = ({ onClick }: Props) => {
  return (
    <button className="p-5 border-black" onClick={onClick}>
      Grid
    </button>
  );
};

export default ButtonTemplate;
