import React from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Rating from "./Rating";
import useCartStore from "../../../store/useCartStore";

const ProductCard = ({
   product: {
      id,
      title,
      price,
      image,
      rating: { rate },
      slug,
   },
}) => {
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
      navigate(`/product-detail/${slug}`);
   };
   return (
      <div
         onClick={handleOpenDetail}
         className="border border-black p-5 flex flex-col items-start gap-3 hover:border-2"
      >
         <img src={image} className="h-40 " alt="" />
         <p className="font-bold line-clamp-1">{title}</p>
         <Rating rate={rate} />
         <div className="flex justify-between items-end w-full">
            <p>${price}</p>
            {carts.find((cart) => cart.productId === id) ? (
               <button
                  onClick={handleAddedBtn}
                  className="text-sm border border-black px-3 py-1 bg-black text-white"
               >
                  Added
               </button>
            ) : (
               <button
                  onClick={handleAddCartBtn}
                  className="text-sm border border-black px-3 py-1"
               >
                  Add Cart
               </button>
            )}
         </div>
      </div>
   );
};

export default ProductCard;
