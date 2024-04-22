"use client";

import Link from "next/link";

import { footerLinks, footerSocialIcons } from "@/constants";

const Footer = () => {
  return (
    <footer className="py-4 sm:px-8 px-4">
      <div className="screen-max-width">
        {/* top */}

        <div className="flex">
          {footerLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className=" text-gray text-xs hover:text-white"
            >
              {link.name}
              {i !== footerLinks.length - 1 && (
                <span className="mx-2"> | </span>
              )}
            </Link>
          ))}
        </div>
        <div className="bg-neutral-700 my-4 h-[1px] w-full" />
        {/* bottom */}
        <div className="flex md:flex-row flex-col md:items-center justify-between">
          <p className="font-semibold text-gray text-xs">
            Copright &copy; 2024 Hugo Tatto Inc. Todos os direitos reservados.
          </p>

          <div className="flex">
            {footerSocialIcons.map((link) => (
              <Link
                href={link.href}
                key={link.href}
                target="_blank"
                className="mx-2 font-semibold hover:underline text-gray text-xs"
              >
                <link.icon size={18} />{" "}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
