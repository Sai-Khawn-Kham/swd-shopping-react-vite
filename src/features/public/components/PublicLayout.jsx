import React from "react";
import { Outlet } from "react-router-dom";
import PublicHeader from "./PublicHeader";
import PublicFooter from "./PublicFooter";
import { Toaster } from "react-hot-toast";

const PublicLayout = () => {
   return (
      <>
         <PublicHeader />
         <Outlet />
         <PublicFooter />
         <Toaster position="top-right" />
      </>
   );
};

export default PublicLayout;
