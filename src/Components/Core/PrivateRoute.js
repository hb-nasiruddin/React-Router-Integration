import React from "react";
import { useAuth } from "../../Context/Auth";

export default function PrivateRoute(props) {
  const { isUserLoggedIn, loggedInUser } = useAuth();

  if (
    isUserLoggedIn &&
    (props.isAdminRoute === true
      ? loggedInUser && loggedInUser.role === "admin"
      : loggedInUser.role === "editor" || loggedInUser.role === "user")
  ) {
    return <div>{props.children}</div>;
  }

  //   if (
  //     isUserLoggedIn &&
  //     (loggedInUser.role === "editor" || loggedInUser.role === "user")
  //   ) {
  //     return <div>{props.children}</div>;
  //   }

  //   if (
  //     isUserLoggedIn &&
  //     props.isAdminRoute === true &&
  //     loggedInUser.role === "admin"
  //   ) {
  //     return <div>{props.children}</div>;
  //   }

  return <>404 Not Found</>;
}
