"use client";

import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { useLanguage } from "@/components/LanguageProvider";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const WorkSlider = () => {
  const { dictionary, dir } = useLanguage();

  const titles = dictionary.work.titles;

  const workSlides = {
    slides: [
      {
        images: [
          {
            title: titles[0],
            path: "/thumb1.jpg",
            link: "https://samacenter.vercel.app/ar",
          },
          {
            title: titles[1],
            path: "/thumb2.jpg",
            link: "https://sama-center-sys.vercel.app/dashboard",
          },
          {
            title: titles[2],
            path: "/thumb3.jpg",
            link: "https://muafa-store.vercel.app/",
          },
        ],
      },
    ],
  };

  return (
    <Swiper
      dir={dir}
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-70 sm:h-120"
    >
      {workSlides.slides.map((slide, i) => (
        <SwiperSlide key={i}>
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            {slide.images.map((image, imageI) => (
              <div
                className="relative rounded-lg overflow-hidden group"
                key={imageI}
              >
                <Image
                  src={image.path}
                  alt={image.title}
                  fill
                  sizes="(max-width: 640px) 45vw, (max-width: 1200px) 22vw, 20vw"
                  className="object-cover"
                />

                <div
                  className="absolute inset-0 bg-linear-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"
                  aria-hidden
                />

                <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                  <Link
                    href={image.link}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]"
                  >
                    <div className="delay-100">{dictionary.work.live}</div>
                    <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                      {dictionary.work.project}
                    </div>
                    <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                      <BsArrowRight aria-hidden />
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
