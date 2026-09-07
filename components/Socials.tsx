import Link from "next/link";
import type { IconType } from "react-icons";
import {
  RiTelegramLine,
  RiFacebookLine,
  RiInstagramLine,
  RiWhatsappLine,
  RiLinkedinLine,
} from "react-icons/ri";

export const socialData: { name: string; link: string; Icon: IconType }[] = [
  {
    name: "Telegram",
    link: "https://t.me/GMSNOW",
    Icon: RiTelegramLine,
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/aymen.homid.9/",
    Icon: RiFacebookLine,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/hitham.homid/",
    Icon: RiInstagramLine,
  },
  {
    name: "WhatsApp",
    link: "https://wa.me/+967777296855",
    Icon: RiWhatsappLine,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/hitham-homid-b08402228/",
    Icon: RiLinkedinLine,
  },
];

const Socials = () => {
  return (
    <div className="flex items-center flex-wrap justify-center gap-x-3 sm:gap-x-5 text-lg">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className={`${
            social.name === "WhatsApp"
              ? "bg-accent rounded-full p-1.25 hover:text-white"
              : "hover:text-accent p-1"
          } -m-1 transition-all duration-300`}
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;