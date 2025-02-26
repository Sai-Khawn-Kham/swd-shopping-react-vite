import React from "react";
import { Link } from "react-router-dom";
import { HiChevronRight, HiMiniHome } from "react-icons/hi2";

const Breadcrumb = ({ currentPageTitle, links }) => {
   return (
      <div className="flex items-center mb-2">
         <Link to="/" className="flex gap-1 items-center">
            <HiMiniHome />
            Home
         </Link>
         {links && links.map((link, index) => (
            <Link
               key={index}
               to={link.path}
               className="flex gap-1 items-center"
            >
               <HiChevronRight />
               {link.title}
            </Link>
         ))}
         <div className="flex gap-1 items-center">
            <HiChevronRight />
            {currentPageTitle}
         </div>
      </div>
   );
};

export default Breadcrumb;
