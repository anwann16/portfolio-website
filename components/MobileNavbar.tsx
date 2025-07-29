"use client";

import Link from "next/link";
import { BiTask } from "react-icons/bi";
import { usePathname } from "next/navigation";
import { FaUser, FaBlogger } from "react-icons/fa";
import React, { useState, useEffect } from "react";

interface Tab {
  id: string;
  label: string;
  icon: React.ReactNode;
  href: string;
}

const MobileNavbar: React.FC = () => {
  const pathName = usePathname();
  const [activeTab, setActiveTab] = useState<string>("/");
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  const tabs: Tab[] = [
    {
      id: "about",
      label: "About",
      icon: <FaUser size={20} />,
      href: "/",
    },
    {
      id: "projects",
      label: "Projects",
      icon: <BiTask size={20} />,
      href: "/projects",
    },
    {
      id: "profile",
      label: "Blog",
      icon: <FaBlogger size={20} />,
      href: "/blog",
    },
  ];

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  return (
    // <div className="min-h-screen">
    <nav
      className={`lg:hidden bg-background fixed bottom-0 left-0 right-0 bg-opacity-10 backdrop-blur-lg border-t border-[#302b63] border-opacity-20 shadow-lg transition-transform duration-300 z-50 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
      // style={gradientStyle}
    >
      <div className="max-w-md mx-auto px-4">
        <div className="flex justify-between items-center py-2">
          {tabs.map((tab) => (
            <Link
              href={tab.href}
              key={tab.id}
              // onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center justify-center p-3 rounded-lg transition-all duration-200 min-w-[60px] ${
                pathName === tab.href
                  ? "text-white bg-[#302b63] bg-opacity-20 scale-105 shadow-lg"
                  : "text-gray-300 hover:text-white hover:bg-[#302b63] hover:bg-opacity-10"
              }`}
            >
              <div
                className={`transition-transform duration-200 ${
                  activeTab === tab.href ? "scale-110" : ""
                }`}
              >
                {tab.icon}
              </div>
              <span
                className={`text-xs mt-1 font-medium transition-all duration-200 ${
                  activeTab === tab.href ? "opacity-100" : "opacity-70"
                }`}
              >
                {tab.label}
              </span>
              {activeTab === tab.href && (
                <div className="absolute -top-1 w-1 h-1 bg-[#302b63] rounded-full animate-pulse" />
              )}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default MobileNavbar;
