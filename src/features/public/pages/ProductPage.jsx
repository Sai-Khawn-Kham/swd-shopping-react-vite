import React from "react";
import CategorySection from "../components/CategorySection";
import ProductSection from "../components/ProductSection";
import Container from "../components/Container";

const ProductPage = () => {
   return (
      <Container>
         <CategorySection />
         <ProductSection />
      </Container>
   );
};

export default ProductPage;
