"use client";

import {
  VscAccount,
  VscArchive,
  VscHome,
  VscSettingsGear,
} from "react-icons/vsc";

export const items = [
  { icon: <VscHome size={18} />, label: "Home", onClick: () => alert("Home!") },
  {
    icon: <VscArchive size={18} />,
    label: "Archive",
    onClick: () => alert("Archive!"),
  },
  {
    icon: <VscAccount size={18} />,
    label: "Profile",
    onClick: () => alert("Profile!"),
  },
  {
    icon: <VscSettingsGear size={18} />,
    label: "Settings",
    onClick: () => alert("Settings!"),
  },
];
