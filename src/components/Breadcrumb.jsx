import React from "react";
import { HiChevronRight, HiMiniHome } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Breadcrumb = ({ currentPageTitle, links }) => {
   return (
      <div className="flex">
         <ol className="inline-flex items-center">
            <li className="inline-flex items-center">
               <Link to="/" className="inline-flex gap-1 items-center">
                  <HiMiniHome />
                  Home
               </Link>
            </li>

            {links &&
               links.map((link, index) => (
                  <li key={index} className="inline-flex items-center">
                     <Link
                        to={link.path}
                        className="inline-flex gap-1 items-center"
                     >
                        <HiChevronRight />
                        {link.title}
                     </Link>
                  </li>
               ))}

            <li className="inline-flex items-center">
               <div className="inline-flex gap-1 items-center">
                  <HiChevronRight />
                  {currentPageTitle}
               </div>
            </li>
         </ol>
      </div>
   );
};

export default Breadcrumb;
