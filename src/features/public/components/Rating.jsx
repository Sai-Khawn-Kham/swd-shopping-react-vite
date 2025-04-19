import React from "react";
import { HiOutlineStar, HiStar } from "react-icons/hi2";

const Rating = ({ rate }) => {
   const currentRate = parseInt(rate).toFixed(0);
   const length = 5;
   const numbers = Array.from({ length }, (_, index) => index + 1);
   return (
      <div className="flex">
         {numbers.map((num) => (
            <span key={num} className="text-gray-500">
               {num <= currentRate ? <HiStar className="size-3" /> : <HiOutlineStar className="size-3" />}
            </span>
         ))}
      </div>
   );
};

export default Rating;
