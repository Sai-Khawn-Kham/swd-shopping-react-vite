import React from "react";
import Container from "../components/Container";
import Breadcrumb from "../../../components/Breadcrumb";
import CartSection from "../components/CartSection";

const MyCartPage = () => {
   return (
      <div className="grow mt-16">
         <Container>
            <Breadcrumb currentPageTitle="My Cart" />
            <CartSection />
         </Container>
      </div>
   );
};

export default MyCartPage;
