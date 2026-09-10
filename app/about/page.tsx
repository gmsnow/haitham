"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";
import {
  FaCss3,
  FaDatabase,
  FaJava,
  FaMicrosoft,
  FaWindows,
} from "react-icons/fa";
import type { IconType } from "react-icons";
import {
  SiAngular,
  SiBootstrap,
  SiCplusplus,
  SiHtml5,
  SiJavascript,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSass,
} from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";
import {
  LuBookOpen,
  LuCode,
  LuCpu,
  LuDumbbell,
  LuGraduationCap,
  LuHeadset,
  LuLanguages,
  LuMonitorCog,
  LuNetwork,
  LuPalette,
  LuPuzzle,
  LuRouter,
  LuUsers,
} from "react-icons/lu";
import { TbBrandAdobe, TbCertificate, TbHeadset } from "react-icons/tb";

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
        id: "frontend",
        icons: [
          SiHtml5,
          FaCss3,
          SiJavascript,
          SiReact,
          SiAngular,
          SiBootstrap,
          SiSass,
        ],
      },
      {
        id: "programming",
        icons: [SiPython, FaJava, SiCplusplus],
      },
      {
        id: "backend",
        icons: [SiNodedotjs],
      },
      {
        id: "databases",
        icons: [FaDatabase, SiMysql, SiPostgresql, DiMsqlServer, SiMongodb],
      },
      {
        id: "os",
        icons: [SiLinux, FaWindows],
      },
      {
        id: "other",
        icons: [TbCertificate, TbBrandAdobe, FaMicrosoft],
      },
    ],
  },
  {
    id: "certifications",
    info: [
      { id: "tech-support-fundamentals", icons: [TbHeadset] },
      { id: "networking", icons: [LuNetwork] },
      { id: "react", icons: [SiReact] },
      { id: "node", icons: [SiNodedotjs] },
      { id: "bootstrap", icons: [SiBootstrap] },
      { id: "sass", icons: [SiSass] },
      { id: "javascript", icons: [SiJavascript] },
      { id: "css", icons: [FaCss3] },
      { id: "html", icons: [SiHtml5] },
    ],
  },
  {
    id: "experience",
    info: [
      { id: "sabafon", icons: [LuHeadset] },
      { id: "sama", icons: [LuMonitorCog] },
      { id: "freelancer", icons: [LuCode, LuLanguages] },
      { id: "assistant", icons: [LuGraduationCap] },
      { id: "tahamah", icons: [LuCode] },
    ],
  },
  {
    id: "education",
    info: [
      { id: "ccna", icons: [LuRouter] },
      { id: "cs-national", icons: [LuGraduationCap] },
      { id: "it-support", icons: [LuMonitorCog] },
      { id: "harvard", icons: [LuGraduationCap] },
      { id: "english", icons: [LuBookOpen] },
    ],
  },
  {
    id: "languages",
    info: [
      { id: "english", icons: [LuLanguages] },
      { id: "arabic", icons: [LuLanguages] },
    ],
  },
  {
    id: "interests",
    info: [
      { id: "technology", icons: [LuCpu] },
      { id: "programming", icons: [LuCode] },
      { id: "design", icons: [LuPalette] },
      { id: "problem-solving", icons: [LuPuzzle] },
      { id: "learning", icons: [LuGraduationCap] },
      { id: "sports", icons: [LuDumbbell] },
      { id: "reading", icons: [LuBookOpen] },
    ],
  },
  {
    id: "references",
    info: [{ id: "available", icons: [LuUsers] }],
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
                  <CountUp start={0} end={21} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-25">
                  {dictionary.about.stats.technologies}
                </div>
              </div>

              <div className="relative flex-1 after:w-px after:h-full after:bg-white/10 after:absolute after:top-0 after:end-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={9} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-25">
                  {dictionary.about.stats.certifications}
                </div>
              </div>

              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={2} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-25">
                  {dictionary.about.stats.languages}
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
          className="flex flex-col w-full xl:max-w-[48%] xl:h-120 xl:min-h-0"
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

          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start overflow-y-auto">
            {aboutData[index].info.map((item, itemI) => {
              const tab = dictionary.about.tabs[
                aboutData[index].id as keyof typeof dictionary.about.tabs
              ];
              const entry = tab.info[itemI];
              const infoTitle = typeof entry === "string" ? entry : entry.title;
              const infoStage =
                typeof entry === "string"
                  ? item.stage
                  : "stage" in entry
                    ? entry.stage
                    : undefined;
              return (
                <div
                  key={itemI}
                  className="flex-1 flex flex-col w-full max-w-full items-center text-center xl:items-start xl:text-start text-white/60"
                >
                  <div className="font-light leading-snug">{infoTitle}</div>
                  {infoStage && (
                    <div className="text-sm text-white/40 mt-0.5">
                      {infoStage}
                    </div>
                  )}

                  {item.icons && item.icons.length > 0 && (
                    <div className="flex flex-wrap justify-center xl:justify-start gap-x-4 mt-1.5">
                      {item.icons.map((Icon, iconI) => (
                        <div key={iconI} className="text-2xl text-white">
                          <Icon aria-hidden />
                        </div>
                      ))}
                    </div>
                  )}
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