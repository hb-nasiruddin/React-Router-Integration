import React from "react";
import { Outlet } from "react-router-dom";
import AuthContextProvider from "../../../../Context/Auth";
import AdminHeader from "./Header";

export default function AdminLayout() {
  return (
    <>
      <AuthContextProvider>
        {/* Header */}
        <AdminHeader />
        {/* Body  */}
        <Outlet />
      </AuthContextProvider>
    </>
  );
}
