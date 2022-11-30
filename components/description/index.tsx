import React from "react";

const Description = ({ title }: { title?: string }) => {
  return (
    <div className="z-10 fixed bottom-6 text-center p-5 w-[250px] h-[100px] bg-white border-black border">
      {title}
    </div>
  );
};

export default Description;
