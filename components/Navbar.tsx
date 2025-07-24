"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const pathname = usePathname();
  const navBarList = [
    {
      name: "About",
      href: "/",
    },
    // {
    //   name: "Experience",
    //   href: "/experience",
    // },
    {
      name: "Projects",
      href: "/projects",
    },
    {
      name: "Blog",
      href: "/blog",
    },
  ];

  return (
    <ul className="hidden lg:flex justify-center gap-5 my-10 lg:my-0 lg:gap-7 lg:flex-col lg:w-32">
      {navBarList.map((item) => (
        <Link
          className={`text-base md:text-lg cursor-pointer ease-in-out duration-200 hover:font-bold hover:text-[#00ade1] ${
            pathname === item.href && `font-bold`
          }`}
          key={item.name}
          href={item.href}
        >
          {item.name}
        </Link>
      ))}
    </ul>
  );
};

export default Navbar;
