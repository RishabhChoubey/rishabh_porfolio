import React from "react";
import {Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServicesCard = ({ title, icon, index }) => {
  return (
    <Tilt
      className="xs:w-[250px] w-full"
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.3 * index, 0.75)}
        className="w-full   p-[1px] rounded-[19px] "
      >
        <div className="bg-primaryOp rounded-[20px] py-5 px-12 flex justify-evenly items-center flex-col min-h-[280px]  backdrop-blur-sm hover:shadow-sdhv  shadow-inset ease-in duration-200 hover:ease-in">
          <img
            src={icon}
            alt="web-development"
            className="w-16 h-16 object-contain"
          />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  console.log(services);
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl"
        >
          I'm a skilled software developer with experience in Big data and
          JavaScript, and expertise in frameworks like React, Node.js, Spark and
          Three.js. I'm a quick learner and collaborate closely with clients to
          create efficient, scalable, and user-friendly solutions that solve
          real-world problems. Let's work together to bring your ideas to life!
        </motion.p>

        <div className="mt-20 flex  gap-10 flex-wrap justify-center items-center">
          {services.map((ser, index) => {
            return <ServicesCard key={index} index={index} {...ser} />;
          })}
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(About, "about");
