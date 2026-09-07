import Image from "next/image";
import Link from "next/link";

import LangToggle from "@/components/LangToggle";
import Socials from "@/components/Socials";

const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full items-center px-5 lg:px-16 xl:px-0 xl:h-22.5 xl:absolute bg-primary/80 backdrop-blur-md xl:bg-transparent xl:backdrop-blur-none">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-5 xl:py-8">
          <div className="flex items-center gap-x-4">
            <Link prefetch href="/">
              <Image
                src="/logo.svg"
                alt="logo"
                width={220}
                height={48}
                priority
                className="w-42.5 h-9.25 md:w-49 md:h-10.75 xl:w-55 xl:h-12"
              />
            </Link>
            <LangToggle />
          </div>

          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;