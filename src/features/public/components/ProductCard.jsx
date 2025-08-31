import React from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Rating from "./Rating";
import useCartStore from "../../../store/useCartStore";

const ProductCard = ({ product: { category, description, id, image, price, rating: { rate, count }, title }}) => {
   const { carts, addCart } = useCartStore();
   const navigate = useNavigate();

   const handleAddedBtn = (e) => {
      e.stopPropagation();
      toast.error("Item is already in the Cart");
   };

   const handleAddCartBtn = (e) => {
      e.stopPropagation();
      toast.success("Item added to the Cart")
      const newCart = {
         id: Date.now(),
         productId: id,
         quantity: 1,
      };
      addCart(newCart);
   };

   const handleOpenDetail = () => {
      navigate(`/product-detail/${id}`);
   };
   return (
      <div className="h-[21.6rem] group">
         <div className="h-24"></div>
         <div className="h-[15.6rem] border border-gray-400 group-hover:border-gray-700"></div>
         <div className="p-3 -mt-[21.6rem]">
            <div
               onClick={handleOpenDetail}
               className="flex flex-col items-start gap-2 overflow-hidden"
            >
               <img src={image} className="h-32" />
               <p className="font-semibold line-clamp-1">{title}</p>
               <p className="line-clamp-3 text-xs text-gray-500">{description}</p>
               <div className="w-full flex justify-between items-center">
                  <Rating rate={rate} />
                  <div className="text-sm">
                     ({rate} / {count})
                  </div>
               </div>
               <hr className="w-full border-gray-500" />
               <p className="font-medium">${price}</p>
               {carts.find((cart) => cart.productId === id) ? (
                  <button
                     onClick={handleAddedBtn}
                     className="w-full text-sm border border-gray-500 py-1 bg-gray-950 text-gray-50"
                  >
                     Added
                  </button>
               ) : (
                  <button
                     onClick={handleAddCartBtn}
                     className="w-full text-sm border border-gray-500 py-1"
                  >
                     Add to Cart
                  </button>
               )}
            </div>
         </div>
      </div>
   );
};

export default ProductCard;
