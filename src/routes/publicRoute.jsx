import { lazy, Suspense } from "react";

const Container = lazy(() => import("../features/public/components/Container"))
const MyCartPage = lazy(() => import("../features/public/pages/MyCartPage"));
const ProductPage = lazy(() => import("../features/public/pages/ProductPage"));
const ProductDetailPage = lazy(() => import("../features/public/pages/ProductDetailPage"));

const publicRoute = [
   {
      index: true,
      element: (
         <Suspense fallback={<Container>Loading...</Container>}>
            <ProductPage />
         </Suspense>
      )
   },
   {
      path: "product-detail/:id",
      element: (
         <Suspense fallback={<Container>Loading...</Container>}>
            <ProductDetailPage />
         </Suspense>
      )
   },
   {
      path: "my-cart",
      element: (
         <Suspense fallback={<Container>Loading...</Container>}>
            <MyCartPage />
         </Suspense>
      )
   },
];

export default publicRoute;
