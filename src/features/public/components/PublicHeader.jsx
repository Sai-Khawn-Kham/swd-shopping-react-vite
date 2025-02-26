import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiShoppingCart } from "react-icons/hi2";
import { HiMenu } from "react-icons/hi";
import Container from "./Container";
import useCartStore from "../../../store/useCartStore";
import useNavBarStore from "../../../store/useNavBarStore";

const PublicHeader = () => {
   const { navBars, setNavBars } = useNavBarStore();
   const { carts } = useCartStore();
   const [open, setOpen] = useState(false);

   const handleOpen = () => {
      setOpen(!open);
   };
   const handleClose = () => {
      setOpen(false);
   };
   return (
      <header className="py-5">
         <div
            className={`w-screen h-screen absolute right-0 top-0 ${
               open ? "block" : "hidden"
            }`}
            onClick={handleClose}
         ></div>
         <Container>
            <div className="flex justify-between items-center">
               <Link to={"/"} className="font-heading text-3xl font-bold">
                  K.Shop
               </Link>
               <div className="hidden md:flex gap-5">
                  {navBars.map((navBar) => (
                     <Link key={navBar.id} to={navBar.url} onClick={() => setNavBars(navBar.id)} className={`${navBar.isActive ? "underline" : ""} hover:scale-105`}>
                        {navBar.name}
                     </Link>
                  ))}
               </div>
               <Link to={"/my-cart"} className="hidden md:block relative">
                  <HiShoppingCart className="size-9" />
                  <span className="absolute top-0 right-0 translate-x-2/3 -translate-y-1/2 inline-block text-xs bg-red-500 overflow-hidden rounded-full text-white px-2 py-1">
                     {carts.length}
                  </span>
               </Link>
               <div className="md:hidden relative">
                  <div className="flex items-center gap-5">
                     <Link to={"/my-cart"} className="relative">
                        <HiShoppingCart className="size-9" />
                        <span className="absolute top-0 right-0 translate-x-2/3 -translate-y-1/2 inline-block text-xs bg-red-500 overflow-hidden rounded-full text-white px-2 py-1">
                           {carts.length}
                        </span>
                     </Link>
                     <HiMenu onClick={handleOpen} className="size-9" />
                  </div>
                  <div
                     className={`absolute right-0 w-max ${
                        open ? "block" : "hidden"
                     } bg-gray-500 text-white text-center rounded-lg overflow-hidden`}
                  >
                     {navBars.map((navBar) => (
                        <Link
                           key={navBar.id}
                           to={navBar.url}
                           onClick={handleClose}
                           className="block border-b last:border-none px-10 py-1 hover:bg-gray-600"
                        >
                           {navBar.name}
                        </Link>
                     ))}
                  </div>
               </div>
            </div>
         </Container>
      </header>
   );
};

export default PublicHeader;
