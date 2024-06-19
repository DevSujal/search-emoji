import React from "react";
import { NavLink } from "react-router-dom";

function Categorys({ category = "" }) {
  return (
    <NavLink
      to={`/${category}`}
      className={({ isActive }) =>
        `${
          isActive ? "bg-orange-600" : "bg-blue-600"
        } p-2 rounded-md text-white`
      }
    >
      {category.replaceAll("-", " ")}
    </NavLink>
  );
}

export default Categorys;
