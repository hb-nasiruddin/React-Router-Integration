/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import { appRoutes } from "../../../Common/common";
import { useAuth } from "../../../Context/Auth";

export default function Header() {
  const {
    isUserLoggedIn,
    onLogout,
    loggedInUser: { first_name, last_name } = { first_name: "", last_name: "" },
  } = useAuth();

  return (
    <>
      <header className="site-header sticky-top py-1">
        <nav className="container d-flex flex-column flex-md-row justify-content-between">
          <a className="py-2" href="#" aria-label="Product">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="d-block mx-auto"
              role="img"
              viewBox="0 0 24 24"
            >
              <title>Product</title>
              <circle cx={12} cy={12} r={10} />
              <path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94" />
            </svg>
          </a>
          {/* <a className="py-2 d-none d-md-inline-block" href="#">
            Tour
          </a>
          <a className="py-2 d-none d-md-inline-block" href="#">
            Product
          </a>
          <a className="py-2 d-none d-md-inline-block" href="#">
            Features
          </a>
          <a className="py-2 d-none d-md-inline-block" href="#">
            Enterprise
          </a>
          <a className="py-2 d-none d-md-inline-block" href="#">
            Support
          </a>
          <a className="py-2 d-none d-md-inline-block" href="#">
            Pricing
          </a> */}
          {isUserLoggedIn ? (
            <>
              <span className="py-2 d-none d-md-inline-block">
                {first_name} {last_name}
              </span>
              <button onClick={onLogout}>Logout</button>
            </>
          ) : (
            <Link className="py-2 d-none d-md-inline-block" to={appRoutes.LOGIN}>
              Login
            </Link>
          )}
        </nav>
      </header>
    </>
  );
}
