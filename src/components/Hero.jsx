import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`absolute inset-0 top-[100px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm &nbsp;
            <span className="text-[#915EFF]">
              <Typewriter
                options={{
                  strings: [" Rishabh", "  Choubey"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop 3D visuals, user <br className="sm:block hidden" />
            interfaces, web applications and play with Big data.
          </p>
        </div>
      </div>
      {/* <ComputersCanvas /> */}
      <div className="pyramid-loader  absolute w-full h-[50%]">
  <div className="wrapper">
    <span className="side side1 "></span>
    <span className="side side2"></span>
    <span className="side side3"></span>
    <span className="side side4"></span>
    <span className="shadow"></span>
  </div>  
  {/* <div className="loader absolute"></div> */}
</div>

      <div className="absolute flex  justify-center xs:bottom-5 bottom-10 w-full ">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl flex justify-center items-center border-secondary border-4 p-2">
            <motion.div
              animate={{
                y: [-15, 15, -15],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            ></motion.div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
