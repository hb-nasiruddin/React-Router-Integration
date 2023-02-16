import { createBrowserRouter } from "react-router-dom";
import { appRoutes } from "../../Common/common";
import AComponent from "../../Components/Pages/A";
import BComponent from "../../Components/Pages/B";
import CComponent from "../../Components/Pages/C";
import DefaultComponent from "../../Components/Pages/Default";

export const router = createBrowserRouter([
  {
    path: appRoutes.DEFAULT,
    element: <DefaultComponent />,
  },
  {
    path: appRoutes.AComonent,
    element: <AComponent />,
  },
  {
    path: appRoutes.LOGIN,
    element: <BComponent />,
  },
  {
    path: appRoutes.CComponent,
    element: <CComponent />,
  },

  {
    path: appRoutes.userdata,
    element: <CComponent />,
  },
]);

export default router;
