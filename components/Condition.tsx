"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Sidebar from "./Sidebar";

const Condition = () => {
  const pathName = usePathname();

  return <>{pathName !== "/posts" && <Sidebar />}</>;
};

export default Condition;
