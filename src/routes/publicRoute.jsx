import { lazy, Suspense } from "react";

const HomePage = lazy(() => import("../features/public/pages/HomePage"));

const publicRoute = [
   {
      index: true,
      element: (
         <Suspense fallback={<div>Loading...</div>}>
            <HomePage />
         </Suspense>
      ),
   },
];

export default publicRoute;
