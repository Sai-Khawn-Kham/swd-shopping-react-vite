import React from "react";
import Container from "../components/Container";
import Breadcrumb from "../../../components/Breadcrumb";
import CartSection from "../components/CartSection";

const MyCartPage = () => {
   return (
      <Container>
         <Breadcrumb currentPageTitle="My Cart" />
         <CartSection />
      </Container>
   );
};

export default MyCartPage;
