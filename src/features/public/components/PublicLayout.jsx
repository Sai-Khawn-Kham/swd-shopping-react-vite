import React from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import PublicHeader from "./PublicHeader";
import PublicFooter from "./PublicFooter";
import Container from "./Container";

const PublicLayout = () => {
   return (
      <div className="min-h-screen flex flex-col">
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
      </div>
   );
};

export default PublicLayout;
