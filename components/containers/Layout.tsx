import React, { useEffect, useState } from "react";
import Logo from "../logo";
import GridLayout from "./grid";
import SlideLayout from "./slide";
import ButtonTemplate from "../buttonChangeTemplate";

const Layout = () => {
  const [gridVisible, setgridVisible] = useState(true);
  // useEffect(() => {
  //   console.log(gridVisible, "gridVisible");
  // }, [gridVisible]);

  return (
    <div>
      <Logo />
      <ButtonTemplate onClick={() => setgridVisible((prev) => !prev)} />
      {gridVisible ? <GridLayout /> : <SlideLayout />}
    </div>
  );
};

export default Layout;
