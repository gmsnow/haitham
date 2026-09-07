"use client";

import { motion } from "framer-motion";

import { useLanguage } from "@/components/LanguageProvider";
import ParticlesContainer from "@/components/ParticlesContainer";
import ProjectsBtn from "@/components/ProjectsBtn";
import Avatar from "@/components/Avatar";
import { fadeIn } from "@/variants";

const Home = () => {
  const { dictionary, dir } = useLanguage();

  return (
    <div className="bg-primary/60 h-full relative overflow-x-clip">
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
      >
        <div
          role="img"
          className={`hidden xl:block absolute bottom-0 w-full h-full bg-none xl:bg-explosion xl:bg-cover xl:bg-no-repeat mix-blend-color-dodge translate-z-0 ${
            dir === "rtl"
              ? "right-auto left-0 xl:scale-x-[-1]"
              : "right-0 xl:bg-right"
          }`}
        />
        <ParticlesContainer />
      </div>

      <div className="relative z-10 container mx-auto h-full">
        <div className="flex flex-col items-center xl:items-end xl:flex-row h-full">
          <div className="flex-1 min-w-0 flex flex-col justify-center text-center xl:text-start pb-10 xl:pb-0">
            <motion.h1
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h1 xl:max-w-160"
            >
              {dictionary.home.title1} <br /> {dictionary.home.title2}{" "}
              <span className="text-accent">
                {dictionary.home.titleAccent}
              </span>
            </motion.h1>

            <motion.p
              variants={fadeIn("down", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
            >
              {dictionary.home.tagline}
            </motion.p>

            <div className="flex justify-center xl:justify-start">
              <div className="xl:hidden">
                <ProjectsBtn />
              </div>
            </div>

            <motion.div
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="hidden xl:flex"
            >
              <ProjectsBtn />
            </motion.div>
          </div>

<motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            transition={{ duration: 1, ease: "easeInOut" }}
            className="relative flex-shrink-0 w-64 sm:w-84 lg:w-100 xl:w-[clamp(320px,32vw,560px)] max-w-full mx-auto xl:mx-0 pb-28 sm:pb-20 xl:pb-0"
>
            <Avatar />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;