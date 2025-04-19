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
            isActive && "bg-gray-700 text-gray-50"
         } w-36 mr-3 last:mr-0 border border-gray-700 rounded text-nowrap hover:bg-gray-500`}
      >
         {name}
      </button>
   );
};

export default CategoryButton;
