import React from "react";

const Container = ({ children, className }) => {
   return (
      <section
         className={`w-full md:w-[720px] lg:w-[1000px] px-7 mx-auto ${className}`}
      >
         {children}
      </section>
   );
};

export default Container;
