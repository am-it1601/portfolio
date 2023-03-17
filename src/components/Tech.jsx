import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="mb-10">
        <p className={`${styles.sectionSubText} text-center`}>
          Tech and Tools for my development.
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          My area of Expertise
        </h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28 m-5" key={technology.name}>
            <BallCanvas icon={technology.icon} />
            <p className="text-center text-secondary text-[12px] mt-2">
              {technology.name}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
