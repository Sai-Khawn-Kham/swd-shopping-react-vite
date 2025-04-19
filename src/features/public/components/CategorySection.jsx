import React from "react";
import CategoryButton from "./CategoryButton";
import Container from "./Container";
import useCategoryStore from "../../../store/useCategoryStore";

const CategorySection = () => {
   const { categories } = useCategoryStore();
   return (
      <div className="mb-3">
         <div className="overflow-auto text-nowrap hsb">
            {categories.map((category) => (
               <CategoryButton key={category.id} category={category} />
            ))}
         </div>
      </div>
   );
};

export default CategorySection;
