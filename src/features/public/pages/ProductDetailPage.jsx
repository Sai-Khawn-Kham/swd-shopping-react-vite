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
         <div className="border border-gray-950 p-3 md:p-5 lg:p-10 mb-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
               <div className="flex justify-center items-center">
                  <img
                     src={currentProduct.image}
                     className="w-2/3"
                  />
               </div>
               <div className="flex flex-col gap-3 items-start">
                  <h3 className="text-2xl font-semibold">
                     {currentProduct.title}
                  </h3>
                  <p className="bg-gray-300 text-gray-700 inline-block px-3 py-1">
                     {currentProduct.category}
                  </p>
                  <p className="grow">{currentProduct.description}</p>
                  <Rating rate={currentProduct.rating.rate} />
                  <div className="flex justify-between items-center w-full">
                     <p>Price: ${currentProduct.price}</p>
                     {carts.find(
                        (cart) => cart.productId === currentProduct.id
                     ) ? (
                        <button
                           onClick={handleAddedBtn}
                           className="text-sm border border-gray-950 px-3 py-1 bg-gray-950 text-gray-50"
                        >
                           Added
                        </button>
                     ) : (
                        <button
                           onClick={handleAddCartBtn}
                           className="text-sm border border-gray-950 px-3 py-1"
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
