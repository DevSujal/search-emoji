import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import emoji from "../Api/emoji";
import { useDispatch } from "react-redux";

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
