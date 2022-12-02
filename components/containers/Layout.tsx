import React, { useEffect, useState } from "react";
import Logo from "../logo";
import GridLayout from "./grid";
import SlideLayout from "./slide";
import ButtonTemplate from "../button/buttonTemplate";
import { GALLARY } from "@/constants/albums";
import ButtonInfo from "../button/buttonInfo";
import Tab from "../tab";

const Layout = () => {
  const [gridVisible, setgridVisible] = useState(true);
  const [tabVisible, settabVisible] = useState(false);

  return (
    <div className="w-[100vw] h-[calc(1vh  * 100)]">
      {/* <Tab tabVisible={tabVisible} /> */}
      <div className="relative h-8 py-5">
        <Logo />
        <div className="flex gap-2 fixed right-5 z-10">
          <ButtonInfo onClick={() => settabVisible((prev) => !prev)} />
          <ButtonTemplate onClick={() => setgridVisible((prev) => !prev)} />
        </div>
      </div>
      {gridVisible ? (
        <GridLayout images={GALLARY} />
      ) : (
        <SlideLayout images={GALLARY} />
      )}
    </div>
  );
};

export default Layout;
