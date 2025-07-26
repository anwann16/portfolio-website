import React from "react";

const PageContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="w-full px-5 lg:px-10 py-5 md:py-15 overflow-hidden">
      {children}
    </section>
  );
};

export default PageContainer;
