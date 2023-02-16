import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { appRoutes } from "../../../Common/common";

export default function AComponent() {
  const [isUserLoggedIn, setisUserLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setisUserLoggedIn(true);
    }
  }, []);

  const onClickAuthenticate = () => {
    setisUserLoggedIn(true);
    localStorage.setItem("token", true);
  };

  const onClickLogout = () => {
    setisUserLoggedIn(false);
    localStorage.removeItem("token");
  };

  const userID = () => (Math.random() * 1000).toFixed(0).toString();
  return (
    <div>
      AComponent
      {isUserLoggedIn ? (
        <button type="button" onClick={onClickLogout}>
          {" "}
          Logout
        </button>
      ) : (
        <button type="button" onClick={onClickAuthenticate}>
          {" "}
          Login
        </button>
      )}
      <br />
      <br />
      <br />
      <br />
      <Link
        to={"/c/" + userID() + `?token=${userID()}`}
        state={{ name: "Nasiruddin", isUserLoggedIn }}
      >
        Home Link
      </Link>
    </div>
  );
}
