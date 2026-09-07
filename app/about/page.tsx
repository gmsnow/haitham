"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";
import {
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import type { IconType } from "react-icons";
import {
  SiLinux,
  SiMongodb,
  SiNodedotjs,
  SiOdoo,
  SiPostgresql,
  SiPython,
} from "react-icons/si";
import { TbBrandAdobePhotoshop, TbBrandAdobeXd } from "react-icons/tb";

import Circles from "@/components/Circles";
import { useLanguage } from "@/components/LanguageProvider";
import { fadeIn } from "@/variants";

type AboutInfoItem = {
  id: string;
  stage?: string;
  icons?: IconType[];
};

type AboutDataItem = {
  id: string;
  info: AboutInfoItem[];
};

const aboutData: AboutDataItem[] = [
  {
    id: "skills",
    info: [
      {
        id: "fullstack",
        icons: [
          FaHtml5,
          FaCss3,
          FaJs,
          FaReact,
          FaNodeJs,
          SiNodedotjs,
          SiPostgresql,
        ],
      },
      {
        id: "erp",
        icons: [SiOdoo, SiPython, SiMongodb, SiLinux],
      },
      {
        id: "uiux",
        icons: [FaFigma, TbBrandAdobeXd, TbBrandAdobePhotoshop],
      },
    ],
  },
  {
    id: "certifications",
    info: [
      {
        id: "google",
        stage: "2022 - 2024",
      },
      {
        id: "cs50",
        stage: "2024 - 2025",
      },
    ],
  },
  {
    id: "experience",
    info: [
      {
        id: "sama",
        stage: "2024 - Present",
      },
      {
        id: "tahamah",
        stage: "2019 - 2020",
      },
    ],
  },
  {
    id: "education",
    info: [
      {
        id: "ba",
        stage: "2019 - 2024",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  const { dictionary } = useLanguage();

  return (
    <div className="h-full bg-primary/30 py-28 sm:py-32 text-center xl:text-start">
      <Circles />

      <div className="container mx-auto h-full relative z-10 flex flex-col items-center xl:flex-row gap-x-6 gap-y-12 xl:gap-y-0">
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            {dictionary.about.headingPre}{" "}
            <span className="text-accent">
              {dictionary.about.headingAccent}
            </span>{" "}
            {dictionary.about.headingPost}
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-125 mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            {dictionary.about.tagline}
          </motion.p>

          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              <div className="relative flex-1 after:w-px after:h-full after:bg-white/10 after:absolute after:top-0 after:end-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={7} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-25">
                  {dictionary.about.stats.experience}
                </div>
              </div>

              <div className="relative flex-1 after:w-px after:h-full after:bg-white/10 after:absolute after:top-0 after:end-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={232} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-25">
                  {dictionary.about.stats.clients}
                </div>
              </div>

              <div className="relative flex-1 after:w-px after:h-full after:bg-white/10 after:absolute after:top-0 after:end-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={21} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-25">
                  {dictionary.about.stats.projects}
                </div>
              </div>

              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={1453} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-25">
                  {dictionary.about.stats.support}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] xl:h-120"
        >
          <div className="flex flex-wrap justify-center xl:justify-start gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemI) => {
              const tab = dictionary.about.tabs[
                item.id as keyof typeof dictionary.about.tabs
              ];
              return (
                <div
                  key={itemI}
                  className={`${
                    index === itemI &&
                    "text-accent after:w-full after:bg-accent after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-0.5 after:bg-white after:absolute after:-bottom-1 after:start-0`}
                  onClick={() => setIndex(itemI)}
                >
                  {tab.label}
                </div>
              );
            })}
          </div>

          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemI) => {
              const tab = dictionary.about.tabs[
                aboutData[index].id as keyof typeof dictionary.about.tabs
              ];
              const entry = tab.info[itemI];
              const infoTitle = typeof entry === "string" ? entry : entry.title;
              const infoStage = typeof entry === "string" ? item.stage : entry.stage;
              return (
                <div
                  key={itemI}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-center text-white/60"
                >
                  <div className="font-light mb-2 md:mb-0">{infoTitle}</div>
                  {infoStage && (
                    <>
                      <div className="hidden md:flex">-</div>
                      <div>{infoStage}</div>
                    </>
                  )}

                  <div className="flex gap-x-4">
                    {item.icons?.map((Icon, iconI) => (
                      <div key={iconI} className="text-2xl text-white">
                        <Icon />
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
