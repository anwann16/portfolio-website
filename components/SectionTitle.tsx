import React from "react";
import GradientText from "./GradientText";

const SectionTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-center">
      <h2 className="text-foreground mx-1 font-bold text-3xl relative inline-block stroke-current text-center">
        <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={3}
          showBorder={false}
          className="custom-class"
        >
          {children}
        </GradientText>
        <svg
          className="absolute -bottom-0.5 w-full max-h-1.5"
          viewBox="0 0 55 5"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002"
            strokeWidth="2"
          ></path>
        </svg>
      </h2>
    </div>
  );
};

export default SectionTitle;
