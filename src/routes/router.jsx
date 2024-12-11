import { createBrowserRouter } from "react-router-dom";
import PublicLayout from "../features/public/components/PublicLayout";
import NotFound from "../components/NotFound";
import publicRoute from "./publicRoute";
import authRoute from "./authRoute";

const router = createBrowserRouter([
   {
      path: "/",
      element: <PublicLayout />,
      errorElement: <NotFound />,
      children: [...publicRoute],
   },
   ...authRoute,
]);

export default router;
