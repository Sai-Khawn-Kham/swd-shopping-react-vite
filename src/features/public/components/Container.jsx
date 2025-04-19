import React from "react";

const Container = ({ children, className }) => {
   return (
      <div
         className={`w-full md:w-[600px] lg:w-[900px] mx-auto px-3 md:px-0 ${className}`}
      >
         {children}
      </div>
   );
};

export default Container;
