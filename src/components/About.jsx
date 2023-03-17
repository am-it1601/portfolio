import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon, description }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
        <p className="text-secondary text-[12px] font-bold text-center">
          {description}
        </p>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>A bit about Me !</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-5xl leading-[30px]"
      >
        I am well organized, efficient and self-motivated.The key to my success
        is to able to learn quickly and have a minimum turn around time to work
        on any new innovation or challenges, <br />I am an expert Java
        developer, Database Analyst offering 10 years of experience in working
        on client-side environment. I have advanced skills in Netflix Open
        Source Software, Micro-services, Spring Framework/Boot, Hibernate
        Framework, Angular 2/4/5, REST API development, AWS , MySQL,JavaScript,
        HTML 5, SVN/GIT, Native Android to name a few. <br />I can deliver
        belongings With high success rate delivery in over 50 collaboration in
        and outside Up-work in various domains or genres of application
        development. What is bring to the table are excellent communication
        skills, strong analytical skills and creative problem solving and the
        ability to inspire the team to perform at their maximum potential and
        capacity.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((s, index) => (
          <ServiceCard key={s.title} index={index} {...s} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
