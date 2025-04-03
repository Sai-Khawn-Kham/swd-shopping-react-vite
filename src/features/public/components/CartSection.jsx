import React, { useState } from "react";
import toast from "react-hot-toast";
import Cart from "./Cart";
import useCartStore from "../../../store/useCartStore";
import useProductStore from "../../../store/useProductStore";
import emptyCartImg from "../../../../public/assets/empty-cart.svg";
import Swal from "sweetalert2";

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
   const handleOrdered = () => {
      Swal.fire({
         title: "Are you sure?",
         text: "Are you sure to cancel your order",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "Yes, cancel it!",
      }).then((result) => {
         if (result.isConfirmed) {
            setOrder(false)
            toast.success("Canceled the order")
         }
      });
   }
   const handleOrder = () => {
      setOrder(!order);
      toast.success("Your order is pending");
   };
   return (
      <div>
         <div className="h-[350px] md:h-[650px] lg:h-[300px] xl:h-[400px] overflow-auto flex flex-col gap-3 px-2">
            {carts.length === 0 ? (
               <img
                  src={emptyCartImg}
                  className="w-[200px] mx-auto mt-10"
                  alt="empty"
               />
            ) : (
               carts.map((cart) => <Cart key={cart.id} cart={cart} />)
            )}
         </div>
         <div className="border-t border-black my-5">
            <div className="flex justify-end gap-10 my-3 text-right">
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
                     className={`border border-black px-4 py-1.5 inline-block bg-black text-white`}
                  >
                     Order Now
                  </div>
               ) : (
                  <div
                     onClick={handleOrder}
                     className={`border border-black px-4 py-1.5 inline-block`}
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
