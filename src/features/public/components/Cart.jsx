import React from "react";
import Swal from "sweetalert2";
import useProductStore from "../../../store/useProductStore";
import useCartStore from "../../../store/useCartStore";
import toast from "react-hot-toast";

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
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
         }).then((result) => {
            if (result.isConfirmed) {
               removeCart(id);
               toast.success("Removed product from the cart")
            }
         });
      }
   };
   return (
      <div className="border border-black p-2 grid grid-cols-6">
         <div className="col-span-1 my-auto mx-auto">
            <img src={product.image} alt="" className="h-12" />
         </div>
         <div className="col-span-3">
            <p className="mb-1 font-bold">{product.title}</p>
            <p className="text-gray-500">Price ({product.price})</p>
         </div>
         <div className="col-span-1">
            <p className="mb-1">Quantity</p>
            <div className="flex gap-2">
               <button
                  onClick={handleDecreaseQuantity}
                  className="bg-black block text-center text-white px-1"
               >
                  -
               </button>
               <p>{quantity}</p>
               <button
                  onClick={handleIncreaseQuantity}
                  className="bg-black block text-center text-white px-1"
               >
                  +
               </button>
            </div>
         </div>
         <div className="col-span-1">
            <p className="text-end text-xl font-bold mt-2">{cost.toFixed(2)}</p>
         </div>
      </div>
   );
};

export default Cart;
