import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
   return (
      <section className="mx-auto h-max mt-28 text-center">
         <h1 className="mb-2 font-heading text-5xl tracking-tight font-bold">404 Not Found</h1>
         <p className="text-lg font-light text-gray-500">
            Sorry, we can't find that page. You'll find lots to explore on the home page.
         </p>
         <Link to={"/"} className="inline-flex text-gray-50 bg-gray-600 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-lg px-3 py-1 my-4">
            Back to Homepage
         </Link>
      </section>
   );
};

export default NotFound;
