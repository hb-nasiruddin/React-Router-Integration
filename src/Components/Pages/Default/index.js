import React from "react";
import { Link } from "react-router-dom";
import { appRoutes } from "../../../Common/common";

export default function DefaultComponent() {
  return (
    <div>
      DefaultComponent
      <br />
      <Link to={appRoutes.AComonent}>A Component</Link>
      <br />
      <Link to={appRoutes.LOGIN}>Login || B Component</Link>
      <br />
      <Link to={appRoutes.CComponent}>C Component</Link>
    </div>
  );
}
