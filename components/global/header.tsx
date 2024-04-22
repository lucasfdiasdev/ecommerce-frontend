"use client";

import clsx from "clsx";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsBag, BsSearch } from "react-icons/bs";

import NavMobile from "./nav-mobile";
import { navLists } from "@/constants";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [openHeader, setOpenHeader] = useState(false);

  const scrollHeader = () => {
    if (window.scrollY >= 20) {
      setOpenHeader(true);
    } else {
      setOpenHeader(false);
    }
  };

  const toggleIsOpenMenu = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);
    return () => {
      window.addEventListener("scroll", scrollHeader);
    };
  }, []);

  return (
    <div>
      <header
        className={clsx(
          `fixed w-full flex justify-between items-center p-4 sm:px-8 transition-all duration-200 z-20`,
          openHeader ? "bg-black/80 backdrop-blur shadow" : "bg-transparent"
        )}
      >
        <nav className="flex w-full screen-max-width">
          <Link href="/">HUGO TATTO</Link>

          <div className="flex flex-1 justify-center max-md:hidden">
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

          <div className="flex items-center gap-7 max-md:justify-end max-md:flex-1 ">
            <BsSearch size={18} />

            <Link href="/bag">
              <BsBag size={18} />
            </Link>

            <div
              onClick={toggleIsOpenMenu}
              className="p-2 -mx-2 cursor-pointer md:hidden"
            >
              <div
                className={clsx("burger", isActive ? "burgerActive" : "")}
              ></div>
            </div>
          </div>
        </nav>
      </header>
      {isActive && <NavMobile onClick={toggleIsOpenMenu} />}
    </div>
  );
};

export default Header;
