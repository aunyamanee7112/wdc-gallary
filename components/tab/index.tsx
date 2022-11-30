import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import classNames from "classnames";
type Props = {
  tabVisible: boolean;
};
const teams = [
  {
    path: "/images/DSCF4822.jpg",
    name: "kishi",
    position: "Designer & Editor Video",
  },
  { path: "/images/_MG_7745.jpg", name: "aun", position: "Web creater" },
  {
    path: "/images/_MG_7626.jpg",
    name: "tsubasa",
    position: "Designer & Content Writer",
  },
];
const Tab = ({ tabVisible }: Props) => {
  return (
    <motion.div
      initial={{ width: 0, x: 150 }}
      animate={tabVisible ? { width: "50%", x: 0 } : { width: 0, x: 150 }}
      transition={{ duration: 0.5 }}
      className="fixed border-l h-full border-white p-16 bg-black overflow-scroll 
      right-0 z-10 text-white  gap-5 justify-center items-start"
    >
      <motion.div className="w-full">
        <small>About Wdc Talent 2019</small>
        <Image
          src="/images/T_J_logo(white).png"
          width={350}
          height={350}
          quality={100}
          alt={""}
          className="py-10"
        />
        <span className="min-w-[250px] py-10">
          We survey and summarized the different of Thailand temples and
          Japanese then we made this gallery for keep it.
        </span>

        <h1 className="text-3xl py-5">What is WDC</h1>
        <p className="min-w-[500px] text-3xl block">
          Web Design Contest which cooperation by Rajamangala University of
          Thunyaburi and with HIU Japan underneath Jasso Fund
        </p>
        <div>
          <h2 className="text-3xl pt-10">Team</h2>
          <div className="flex gap-5 pt-5">
            {teams.map((member, key) => (
              <div className="text-center" key={key}>
                <div
                  style={{ backgroundImage: `url(${member.path})` }}
                  className={classNames(
                    "w-[150px] h-[150px] bg-white rounded-full",
                    " bg-cover bg-center"
                  )}
                ></div>
                <p className="pt-5 capitalize">{member.name}</p>
                <small className="pt-5 capitalize">{member.position}</small>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Tab;
