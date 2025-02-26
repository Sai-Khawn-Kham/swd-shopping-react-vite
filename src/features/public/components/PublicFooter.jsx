import React from "react";

const PublicFooter = () => {
   const date = new Date();
   return (
      <footer className="mt-auto bg-black text-white text-center py-2">
         © {date.getFullYear()}{" "}
         <a href="https://mms-it.com" className="underline text-gray-300">
            MMS IT
         </a>
         . All rights reserved.
      </footer>
   );
};

export default PublicFooter;
