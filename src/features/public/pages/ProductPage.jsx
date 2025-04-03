import React from "react";
import CategorySection from "../components/CategorySection";
import ProductSection from "../components/ProductSection";
import Container from "../components/Container";

const ProductPage = () => {
   return (
      <div className="grow mt-16">
         <Container>
            <CategorySection />
            <ProductSection />
         </Container>
      </div>
   );
};

export default ProductPage;
