import React, { useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import Cart from "./Cart";
import useCartStore from "../../../store/useCartStore";
import useProductStore from "../../../store/useProductStore";
import emptyCartImg from "../../../../public/assets/empty-cart.svg";

const CartSection = () => {
   const { carts } = useCartStore();
   const { products } = useProductStore();
   const total = carts.reduce((pv, cv) => {
      const price = products.find(({ id }) => id === cv.productId).price;
      const cost = cv.quantity * price;
      return pv + cost;
   }, 0);
   const tax = total * 0.05;
   const netTotal = total + tax;
   const [order, setOrder] = useState(false);
   const handleOrder = () => {
      setOrder(!order);
      toast.success("Your order is pending");
   };
   return (
      <div className="flex flex-col gap-3">
         {carts.length === 0 ? (
            <img
               src={emptyCartImg}
               className="w-[200px] mx-auto mt-10"
               alt="empty"
            />
         ) : (
            carts.map((cart) => <Cart key={cart.id} cart={cart} />)
         )}
         <div>
            <hr className="border-t-1 mt-5 border-black" />
            <div className="flex justify-end gap-10 my-3 text-right">
               <div>
                  <p className="text-gray-500">Total</p>
                  <p className="font-bold">{total.toFixed(2)}</p>
               </div>
               <div>
                  <p className="text-gray-500">Tax</p>
                  <p className="font-bold">{tax.toFixed(2)}</p>
               </div>
               <div>
                  <p className="text-gray-500">Net Total</p>
                  <p className="font-bold text-xl">{netTotal.toFixed(2)}</p>
               </div>
            </div>
            <div className="text-end mb-5">
               <Link
                  onClick={handleOrder}
                  className={`border border-black px-4 py-1.5 ${
                     order ? "bg-black text-white" : ""
                  }`}
               >
                  Order Now
               </Link>
            </div>
         </div>
      </div>
   );
};

export default CartSection;
