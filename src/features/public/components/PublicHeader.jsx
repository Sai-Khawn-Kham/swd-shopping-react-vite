import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiShoppingCart } from "react-icons/hi2";
import Container from "./Container";
import useCartStore from "../../../store/useCartStore";
import useNavBarStore from "../../../store/useNavBarStore";
import { HiMenu } from "react-icons/hi";

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
      <header className="fixed bg-white w-full h-14 flex items-center">
         <Container>
            <div className="flex justify-between">
               {/* logo */}
               <Link to={"/"} className="font-heading text-3xl font-bold">
                  Khawn
               </Link>
               {/* nav item to display at tablet and desktop */}
               {/* <div className="hidden md:flex gap-5">
                  {navBars.map((navBar) => (
                     <Link key={navBar.id} to={navBar.url} onClick={() => setNavBars(navBar.id)} className={`${navBar.isActive ? "underline" : ""} hover:scale-105`}>
                        {navBar.name}
                     </Link>
                  ))}
               </div> */}
               <div className="flex items-center gap-2">
                  <Link to={"/my-cart"} className="relative">
                     <HiShoppingCart className="size-9" />
                     <span className="absolute top-0 right-0 translate-x-1/3 -translate-y-1/3 inline-block text-xs bg-red-500 overflow-hidden rounded-full text-white px-2 py-1">
                        {carts.length}
                     </span>
                  </Link>
                  {/* nav btn to display at mobile */}
                  {/* <div className="relative">
                     <HiMenu onClick={handleOpen} className="size-9 md:hidden" />
                     <div className={`absolute right-0 w-max ${open ? "block" : "hidden"} bg-gray-500 text-white text-center rounded overflow-hidden`}>
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
                  </div> */}
               </div>
            </div>
         </Container>
         <div onClick={handleClose} className={`absolute w-screen h-screen right-0 top-0 ${open ? "block" : "hidden"}`}></div>
      </header>
   );
};

export default PublicHeader;
