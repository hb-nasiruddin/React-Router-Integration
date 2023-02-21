import { createBrowserRouter } from "react-router-dom";
import { appRoutes } from "../../Common/common";
import PrivateRoute from "../../Components/Core/PrivateRoute";
import Dashboard from "../../Components/Pages/Admin/Dashboard";
import Home from "../../Components/Pages/Home";
import Login from "../../Components/Pages/Login";
import Register from "../../Components/Pages/Register";
import AdminLayout from "../../Components/Part/Admin/Layout/Layout";
import DefaultLayout from "../../Components/Part/Layout/Layout";

export const router = createBrowserRouter([
  {
    path: appRoutes.DEFAULT,
    element: <DefaultLayout />,
    children: [
      {
        path: appRoutes.HOME,
        element: <Home />,
      },
      {
        path: appRoutes.LOGIN,
        element: <Login />,
      },
      {
        path: appRoutes.REGISTER,
        element: <Register />,
      },
      {
        path: appRoutes.EDITOR_DASHBOARD,
        element: (
          <PrivateRoute>
            {" "}
            <Dashboard />{" "}
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: appRoutes.ADMIN,
    element: <AdminLayout />,
    children: [
      {
        path: appRoutes.ADMIN_DASHBOARD,
        element: (
          <PrivateRoute isAdminRoute={true}>
            {" "}
            <Dashboard />{" "}
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
