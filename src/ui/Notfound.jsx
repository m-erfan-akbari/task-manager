import React from "react";
import { NavLink } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";

export default function Notfound() {
  return (
    <>
      <div className=""></div>
      <Main className="items-center justify-center !gap-1">
        <h3 className="text-2xl text-red-600">Page not found!</h3>

        <NavLink to={"/"} className={"text-indigo-500"}>
          Back to home
        </NavLink>
      </Main>
    </>
  );
}
