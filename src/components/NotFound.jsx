import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
   return (
      <section className="mx-auto max-w-screen-xl py-8 lg:py-16 px-4 lg:px-6">
         <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-2 text-5xl text-blue-500 lg:text-7xl tracking-tight font-extrabold">
               404 Not Found
            </h1>
            <p className="text-lg font-light text-gray-500">
               Sorry, we can't find that page. You'll find lots to explore on the home page.
            </p>
            <Link
               to={"/"}
               className="inline-flex text-white text-sm text-center font-medium bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-900 rounded-lg px-5 py-2.5 my-4"
            >
               Back to Homepage
            </Link>
         </div>
      </section>
   );
};

export default NotFound;
