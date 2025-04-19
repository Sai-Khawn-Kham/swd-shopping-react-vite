import React, { useState } from "react";
import toast from "react-hot-toast";
import Cart from "./Cart";
import useCartStore from "../../../store/useCartStore";
import useProductStore from "../../../store/useProductStore";
import emptyCartImg from "../../../../public/assets/empty-cart.svg";
import Swal from "sweetalert2";
import { BsCart3, BsX } from "react-icons/bs";

const CartSection = ({ handleClick }) => {
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

   const handleOrdered = () => {
      Swal.fire({
         title: "Are you sure?",
         text: "Are you sure to cancel your order",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#444",
         confirmButtonText: "Confirm",
         cancelButtonColor: "#888",
      }).then((result) => {
         if (result.isConfirmed) {
            setOrder(false)
            toast.success("Canceled the order")
         }
      });
   }
   const handleOrder = () => {
      Swal.fire({
         title: "Are you ready to order?",
         text: "You won't be able to revert this!",
         icon: "question",
         showCancelButton: true,
         confirmButtonColor: "#444",
         confirmButtonText: "Confirm",
         cancelButtonColor: "#888",
      }).then((result) => {
         if (result.isConfirmed) {
            setOrder(false)
            toast.success("Canceled the order")
         }
      });
      setOrder(true);
      toast.success("Your order is pending");
   };

   const stopPropagation = (e) => {
      e.stopPropagation();
   }
   return (
      <div onClick={stopPropagation} className="w-[300px] h-full absolute right-0 bg-gray-50 border-l-2 border-gray-500 flex flex-col gap-3 pb-3">
         <div className="">
            <div className="h-16 border-b-2 border-gray-400 flex justify-between items-center px-2">
               <div className="absolute left-2">
                  <BsCart3 className="size-8 text-gray-50 bg-gray-950 p-2 border border-gray-500 rounded-md" />
                  <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 text-xs bg-red-500 rounded-full text-gray-50 size-5 flex justify-center items-center">
                     {carts.length}
                  </span>
               </div>
               <div className=""></div>
               <div onClick={handleClick} className="">
                  <BsX className="size-8 text-gray-950 bg-gray-50 border border-gray-500 rounded-md" />
               </div>
            </div>
         </div>
         <div className="grow overflow-auto hsb flex flex-col gap-3 px-2">
            {carts.length === 0 ? (
               <div className="h-full flex flex-col justify-center items-center">
                  <img
                     src={emptyCartImg}
                     className="w-[200px]"
                  />
                  <p className="text-gray-600">There is no item yet!</p>
               </div>
            ) : (
               carts.map((cart) => <Cart key={cart.id} cart={cart} />)
            )}
         </div>
         <div className="border-t border-gray-950 px-2">
            <div className="flex justify-end gap-10 text-right my-2">
               <div>
                  <p className="text-gray-500">Total</p>
                  <p className="font-semibold">{total.toFixed(2)}</p>
               </div>
               <div>
                  <p className="text-gray-500">Tax</p>
                  <p className="font-semibold">{tax.toFixed(2)}</p>
               </div>
               <div>
                  <p className="text-gray-500">Net Total</p>
                  <p className="font-semibold text-xl">{netTotal.toFixed(2)}</p>
               </div>
            </div>
            <div className="text-end">
               {order ? (
                  <div
                     onClick={handleOrdered}
                     className={`border border-gray-950 px-4 py-1 inline-block bg-gray-950 text-gray-50`}
                  >
                     Order Now
                  </div>
               ) : (
                  <div
                     onClick={handleOrder}
                     className={`border border-gray-950 px-4 py-1 inline-block`}
                  >
                     Order Now
                  </div>
               )}
            </div>
         </div>
      </div>
   );
};

export default CartSection;
