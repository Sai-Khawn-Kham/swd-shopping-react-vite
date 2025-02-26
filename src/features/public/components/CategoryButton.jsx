import React from "react";
import useCategoryStore from "../../../store/useCategoryStore";

const CategoryButton = ({ category: { id, name, isActive } }) => {
   const { activeCategory } = useCategoryStore();
   const handleOnClick = () => {
      activeCategory(id);
   };
   return (
      <button
         onClick={handleOnClick}
         className={`${
            isActive && "bg-black text-white"
         } border text-nowrap border-black px-3 py-1 me-2 hover:bg-gray-500`}
      >
         {name}
      </button>
   );
};

export default CategoryButton;
