import React from "react";
import ProductCard from "./ProductCard";
import Container from "./Container";
import useProductStore from "../../../store/useProductStore";
import useCategoryStore from "../../../store/useCategoryStore";

const ProductSection = () => {
   const { products } = useProductStore();
   const { categories } = useCategoryStore();
   const currentCategory = categories.find((el) => el.isActive === true);
   return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-10 mb-5">
         <div className="sm:col-span-2 lg:col-span-3 xl:col-span-4 hidden last:block w-max mx-auto mt-10 text-gray-500">There is no product to show currently</div>
         {products.filter((el) =>
            currentCategory.name === "all" ||
            el.category === currentCategory.name
         ).map((product) => (
            <ProductCard key={product.id} product={product} />
         ))}
      </div>
   );
};

export default ProductSection;
