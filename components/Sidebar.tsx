"use client";

import React from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";

import Navbar from "@/components/Navbar";

const SidebarComponent = () => {
  const iconList = [
    {
      icon: <FaGithub size={30} />,
    },
    {
      icon: <FaLinkedin size={30} />,
    },
    {
      icon: <FaWhatsapp size={30} />,
    },
    {
      icon: <FaEnvelope size={30} />,
    },
  ];

  return (
    <div className="lg:w-2/3 lg:h-screen lg:top-0 lg:left-0 lg:z-10 lg:static flex px-7 lg:px-16">
      <div className="flex flex-col lg:justify-between py-10 lg:py-16 lg:pl-[70px]">
        <div className="">
          <h2 className="text-3xl md:text-[34px] font-extrabold font-saira">
            Andi Kurniawan
          </h2>
          <h5 className="text-lg md:text-xl font-semibold my-3 lg:my-3">
            Software Engineer
          </h5>
          <p className="text-sm md:text-base">
            Fullstack | Automation | Web3 & Blockchain Enthusiast
          </p>
        </div>

        <Navbar />

        <div className="flex my-7 gap-5">
          {iconList.map((item, index) => (
            <motion.div
              whileHover={{ scale: 1.3, rotate: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
              style={{ display: "inline-block", cursor: "pointer" }}
              key={index}
            >
              <span className="text-lg my-2 cursor-pointer hover:scale-150">
                {item.icon}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Sidebar = () => {
  const pathName = usePathname();
  const hideSidebar =
    !pathName.startsWith("/posts") && !pathName.startsWith("/dashboard");

  return <>{hideSidebar && <SidebarComponent />}</>;
};

export default Sidebar;
