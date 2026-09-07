"use client";

import Image from "next/image";

import { useLanguage } from "@/components/LanguageProvider";

const Avatar = () => {
  const { dir } = useLanguage();

  return (
    <div className="relative w-full max-w-full pointer-events-none select-none">
      <div className="relative w-full aspect-[1216/1294] overflow-hidden rounded-full lg:rounded-none">
        <Image
          src="/avatar.png"
          alt="avatar"
          fill
          priority
          sizes="(max-width: 640px) 70vw, (max-width: 1200px) 45vw, 30vw"
          className={`translate-z-0 object-cover transition-transform duration-300 ${
            dir === "rtl" ? "-scale-x-100" : ""
          }`}
        />
      </div>
    </div>
  );
};

export default Avatar;