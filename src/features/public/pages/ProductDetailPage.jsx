import React from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import Container from "../components/Container";
import Rating from "../components/Rating";
import Breadcrumb from "../../../components/Breadcrumb";
import useProductStore from "../../../store/useProductStore";
import useCartStore from "../../../store/useCartStore";

const ProductDetailPage = () => {
   const { id } = useParams();
   const { carts, addCart } = useCartStore();
   const { products } = useProductStore();
   const currentProduct = products.find((product) => product.slug == id);

   const handleAddedBtn = (e) => {
      e.stopPropagation();
      toast.error("Item is already in the Cart");
   };
   const handleAddCartBtn = (e) => {
      e.stopPropagation();
      toast.success("Item added to the Cart");
      const newCart = {
         id: Date.now(),
         productId: currentProduct.id,
         quantity: 1,
      };
      addCart(newCart);
   };
   return (
      <Container>
         <Breadcrumb currentPageTitle="Product Detail" />
         <div className="border border-black p-10">
            <div className="grid grid-cols-1 md:grid-cols-2">
               <img
                  src={currentProduct.image}
                  className="h-[200px] md:h-auto md:w-3/4 block mb-5 md:mb-0 md:mx-auto"
                  alt=""
               />
               <div className="flex flex-col gap-5 items-start">
                  <h3 className="text-3xl font-bold line-clamp-3">
                     {currentProduct.title}
                  </h3>
                  <p className="bg-gray-300 text-gray-700 inline-block px-3 py-1">
                     {currentProduct.category}
                  </p>
                  <p className="line-clamp-2">{currentProduct.description}</p>
                  <Rating rate={currentProduct.rating.rate} />
                  <div className="flex justify-between w-full items-center">
                     <p>Price: ${currentProduct.price}</p>
                     {carts.find(
                        (cart) => cart.productId === currentProduct.id
                     ) ? (
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
            </div>
         </div>
      </Container>
   );
};

export default ProductDetailPage;
