"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type ActiveTab = "projects" | "categories" | "posts";

const Tabs = () => {
  const pathName = usePathname();

  return (
    <div className="border-b border-gray-200">
      <nav className="flex space-x-8 px-6">
        {(["projects", "categories", "posts"] as ActiveTab[]).map((tab) => (
          <Link
            key={tab}
            href={`/dashboard/${tab}`}
            className={`py-4 px-1 border-b-2 font-medium text-sm capitalize transition-colors ${
              pathName.includes(tab)
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            {tab}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Tabs;
