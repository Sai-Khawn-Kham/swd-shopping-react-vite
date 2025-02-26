import { lazy, Suspense } from "react";

const MyCartPage = lazy(() => import("../features/public/pages/MyCartPage"));
const ProductPage = lazy(() => import("../features/public/pages/ProductPage"));
const ProductDetailPage = lazy(() => import("../features/public/pages/ProductDetailPage"));

const publicRoute = [
   {
      index: true,
      element: (
         <Suspense fallback={<div>Loading...</div>}>
            <ProductPage />
         </Suspense>
      )
   },
   {
      path: "product-detail/:id",
      element: (
         <Suspense fallback={<div>Loading...</div>}>
            <ProductDetailPage />
         </Suspense>
      )
   },
   {
      path: "my-cart",
      element: (
         <Suspense fallback={<div>Loading...</div>}>
            <MyCartPage />
         </Suspense>
      )
   },
];

export default publicRoute;
