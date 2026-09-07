"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { IconType } from "react-icons";
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";

import { useLanguage } from "@/components/LanguageProvider";

export const navData: { name: string; path: string; Icon: IconType }[] = [
  { name: "home", path: "/", Icon: HiHome },
  { name: "about", path: "/about", Icon: HiUser },
  { name: "services", path: "/services", Icon: HiRectangleGroup },
  { name: "work", path: "/work", Icon: HiViewColumns },
  {
    name: "testimonials",
    path: "/testimonials",
    Icon: HiChatBubbleBottomCenterText,
  },
  {
    name: "contact",
    path: "/contact",
    Icon: HiEnvelope,
  },
];

const Nav = () => {
  const pathname = usePathname();
  const { dictionary } = useLanguage();

  return (
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:end-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen pb-[max(env(safe-area-inset-bottom),0.5rem)] xl:pb-0">
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-20 xl:h-max py-0 xl:py-8 bg-white/10 backdrop-blur-xs text-3xl xl:text-xl xl:rounded-full">
        {navData.map((link, i) => (
          <Link
            prefetch
            className={`${
              link.path === pathname && "text-accent"
            } relative flex items-center justify-center group hover:text-accent transition-all duration-300 py-3 xl:py-0`}
            href={link.path}
            key={i}
          >
            <div
              role="tooltip"
              className="absolute end-0 pe-14 hidden xl:group-hover:flex"
            >
              <div className="bg-white relative flex text-primary items-center p-1.5 rounded-[3px]">
                <div className="text-[12px] leading-none font-semibold capitalize">
                  {dictionary.nav[link.name as keyof typeof dictionary.nav]}
                </div>

                <div
                  className="tooltip-caret border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute end-[-0.5rem]"
                  aria-hidden
                />
              </div>
            </div>

            <div>
              <link.Icon aria-hidden />
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;