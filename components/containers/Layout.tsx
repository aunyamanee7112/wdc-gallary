import React, { useEffect, useState } from "react";
import Logo from "../logo";
import GridLayout from "./grid";
import SlideLayout from "./slide";
import ButtonTemplate from "../buttonChangeTemplate";
import { GALLARY } from "@/constants/albums";

const Layout = () => {
  const [gridVisible, setgridVisible] = useState(true);
  // useEffect(() => {
  //   console.log(gridVisible, "gridVisible");
  // }, [gridVisible]);

  return (
    <div className="w-[100vw] h-[calc(1vh  * 100)]">
      <div className="relative h-8 py-5">
        <Logo />
        <ButtonTemplate onClick={() => setgridVisible((prev) => !prev)} />
      </div>
      {gridVisible ? <GridLayout images={GALLARY} /> : <SlideLayout />}
    </div>
  );
};

export default Layout;
