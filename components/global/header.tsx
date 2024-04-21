"use client";

import Link from "next/link";
import { BsAppIndicator, BsBag, BsSearch } from "react-icons/bs";

import { navLists } from "@/constants";

const Header = () => {
  return (
    <header className="w-full py-4 sm:px-8 px-4 flex justify-between items-center bg-zinc">
      <nav className="flex w-full sticky screen-max-width z-20">
        <Link href="/">
          <BsAppIndicator size={18} />
        </Link>

        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((nav) => (
            <Link
              className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all"
              key={nav.href}
              href={nav.href}
            >
              {nav.name}
            </Link>
          ))}
        </div>

        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          <BsSearch size={18} />

          <Link href="/bag">
            <BsBag size={18} />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
