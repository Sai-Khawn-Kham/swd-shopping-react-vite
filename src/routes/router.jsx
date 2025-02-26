import { createBrowserRouter } from "react-router-dom";
import PublicLayout from "../features/public/components/PublicLayout";
import NotFound from "../components/NotFound";
import publicRoute from "./publicRoute";

const router = createBrowserRouter([
   {
      path: "/",
      element: <PublicLayout />,
      errorElement: <NotFound />,
      children: [...publicRoute],
   },
]);

export default router;
