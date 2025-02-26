import React from "react";
import { HiOutlineStar, HiStar } from "react-icons/hi2";

const Rating = ({ rate }) => {
   const currentRate = parseInt(rate).toFixed(0);
   const length = 5;
   const numbers = Array.from({ length }, (_, index) => index + 1);
   return (
      <div className="flex gap-1">
         {numbers.map((num) => (
            <span key={num} className="text-yellow-300">
               {num <= currentRate ? <HiStar /> : <HiOutlineStar />}
            </span>
         ))}
      </div>
   );
};

export default Rating;
