/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Outlet } from "react-router-dom";
import AuthContentProvider from "../../../Context/Auth";
import Footer from "./Footer";
import Header from "./Header";

export default function DefaultLayout() {
  return (
    <>
      <AuthContentProvider>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </AuthContentProvider>
    </>
  );
}
