import React from "react";
import CategoryButton from "./CategoryButton";
import Container from "./Container";
import useCategoryStore from "../../../store/useCategoryStore";

const CategorySection = () => {
   const { categories } = useCategoryStore();
   return (
      <div className="mb-2">
         <p className="text-sm text-gray-500 mb-1">Product Categories</p>
         <div className="flex overflow-scroll hsb">
            {categories.map((category) => (
               <CategoryButton key={category.id} category={category} />
            ))}
         </div>
      </div>
   );
};

export default CategorySection;
