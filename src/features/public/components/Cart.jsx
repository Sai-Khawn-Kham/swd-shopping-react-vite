import React from "react";
import Swal from "sweetalert2";
import useProductStore from "../../../store/useProductStore";
import useCartStore from "../../../store/useCartStore";
import toast from "react-hot-toast";
import { BsTrash } from "react-icons/bs";

const Cart = ({ cart: { id, productId, quantity } }) => {
   const { products } = useProductStore();
   const { increaseQuantity, decreaseQuantity, removeCart } = useCartStore();
   const product = products.find((el) => el.id === productId);
   const cost = product.price * quantity;

   const handleIncreaseQuantity = () => {
      increaseQuantity(id);
   };

   const handleDecreaseQuantity = () => {
      if (quantity > 1) {
         decreaseQuantity(id);
      } else {
         Swal.fire({
            title: "Are you sure to delete?",
            text: "You won't be able to revert this!",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#444",
            cancelButtonColor: "#888",
            confirmButtonText: "Confirm",
         }).then((result) => {
            if (result.isConfirmed) {
               removeCart(id);
               toast.success("Removed product from the cart")
            }
         });
      }
   };

   const handleDelete = () => {
      Swal.fire({
         title: "Are you sure to delete?",
         text: "You won't be able to revert this!",
         icon: "question",
         showCancelButton: true,
         confirmButtonColor: "#444",
         cancelButtonColor: "#888",
         confirmButtonText: "Confirm",
      }).then((result) => {
         if (result.isConfirmed) {
            removeCart(id);
            toast.success("Removed product from the cart")
         }
      });
   }
   return (
      <div className="h-32">
         <div className="h-11"></div>
         <div className="h-[5.25rem] border border-gray-950"></div>
         <div className="p-2 flex flex-col gap-1 -mt-32 group">
            <div className="flex justify-between items-end">
               <img src={product.image} className="h-16" />
               <BsTrash onClick={handleDelete} className="text-red-500 hidden group-hover:block" />
            </div>
            <p className="line-clamp-1">{product.title}</p>
            <div className="text-xs flex justify-between items-center">
               <p className="text-gray-500">${product.price}</p>
               <div className="bg-gray-300 flex items-center gap-2">
                  <button
                     onClick={handleDecreaseQuantity}
                     className="block text-center px-1"
                  >
                     -
                  </button>
                  <p>{quantity}</p>
                  <button
                     onClick={handleIncreaseQuantity}
                     className="block text-center px-1"
                  >
                     +
                  </button>
               </div>
               <p>{cost.toFixed(2)}</p>
            </div>
         </div>
      </div>
   );
};

export default Cart;
