import React from "react";
import ProductCard from "./ProductCard";
import useCategoryStore from "../../../store/useCategoryStore";

const ProductSection = () => {
   const [ products, setProducts ] = React.useState([]);
   const [ loading, setLoading ] = React.useState(true);
   const { categories } = useCategoryStore();

   const currentCategory = categories.find((el) => el.isActive === true);

   React.useEffect(() => {
      setLoading(true);
      fetch('https://fakestoreapi.com/products')
         .then(res => res.json())
         .then(data => setProducts(data))
         .catch(err => console.log(err))
         .finally(() => setLoading(false));
   }, []);

   const filteredProducts = products.filter(
      (product) => currentCategory.name === "all" || product.category === currentCategory.name
   );

   return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-10 mb-5">
         {loading ? (
            Array.from({ length: 8 }).map((_, i) => (
               <div key={i} className="animate-pulse p-4 rounded-2xl shadow-sm bg-white">
                  <div className="h-40 bg-gray-200 rounded-lg mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
               </div>
            ))
         ) : filteredProducts.length === 0 ? (
            <div className="col-span-full text-center text-gray-500 mt-10">
               There is no product to show currently
            </div>
         ) : (
            filteredProducts.map((product) => (
               <ProductCard key={product.id} product={product} />
            ))
         )}
      </div>
   );
};

export default ProductSection;
