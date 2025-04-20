import React, { useState } from "react";
import Container from "./Container";
import { Link } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import CartSection from "./CartSection"
import useCartStore from "../../../store/useCartStore";
import useProductStore from "../../../store/useProductStore";

const PublicHeader = () => {
   const { carts } = useCartStore();
   const [ open, setOpen ] = useState(false);

   const handleClick = () => {
      setOpen(!open);
   };

   return (
      <header className="fixed bg-gray-50 w-full h-16 flex items-center border-b-2 border-gray-400">
         <Container>
            <div className="flex justify-between">
               <Link to={"/"} className="font-heading text-xl/4 font-bold">
                  MMS SOLUTIONS
                  <p className="text-base text-gray-400">E-commerce</p>
               </Link>
               <div className="flex items-center gap-2">
                  {/* <div className="z-10">
                     <BsSearch onClick={handleSearch} className={`${isSearch?"absolute":"border border-gray-400 rounded-lg"} size-8 p-2`} />
                     <input
                        type="text"
                        className={`${isSearch?"":"hidden"} w-48 md:w-56 h-8 focus:ring-0 rounded-md py-1 px-2 pl-8`}
                     />
                  </div> */}
                  <div onClick={handleClick} className="relative">
                     <BsCart3 className="size-8 text-gray-50 bg-gray-950 p-2 rounded-lg" />
                     <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 text-xs bg-red-500 rounded-full text-gray-50 size-5 flex justify-center items-center">
                        {carts.length}
                     </span>
                  </div>
               </div>
            </div>
         </Container>
         <div onClick={handleClick} className={`${open?"block":"hidden"} absolute w-full h-screen top-0 z-20`}>
            <CartSection handleClick={handleClick} />
         </div>
         {/* <div onClick={handleBlur} className={`${isSearch?"block":"hidden"} absolute w-full h-screen top-0`}></div> */}
      </header>
   );
};

export default PublicHeader;
