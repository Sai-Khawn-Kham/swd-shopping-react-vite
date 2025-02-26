import React from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import PublicHeader from "./PublicHeader";
import PublicFooter from "./PublicFooter";

const PublicLayout = () => {
   return (
      <>
         <PublicHeader />
         <Outlet />
         <PublicFooter />
         <Toaster position="top-right" toastOptions={{
            // Default
            className: "",
            duration: 2000,
            style: {
               background: "#363636",
               color: "#fff",
            },
            // Default for specific types
            success: {
               duration: 2000,
               theme: {
                  primary: "green",
                  secondary: "black",
               },
            },
         }} />
      </>
   );
};

export default PublicLayout;
