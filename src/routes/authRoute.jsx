import { lazy, Suspense } from "react";

const LoginPage = lazy(() => import("../features/auth/pages/LoginPage"));
const RegisterPage = lazy(() => import("../features/auth/pages/RegisterPage"));

const authRoute = [
   {
      path: "register",
      element: (
         <Suspense fallback={<div>Page Loading...</div>}>
            <RegisterPage />
         </Suspense>
      ),
   },
   {
      path: "login",
      element: (
         <Suspense fallback={<div>Page Loading...</div>}>
            <LoginPage />
         </Suspense>
      ),
   },
];

export default authRoute;
