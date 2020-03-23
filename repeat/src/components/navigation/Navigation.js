import React from "react";
import { NavLink } from "react-router-dom";

export const Navigation = () => {
  return (
    <ul style={{ textDecoration: "none" }}>
      <li style={{ listStyle: "none" }}>
        <NavLink
          exact
          to="/"
          activeStyle={{
            fontWeight: "bold",
            color: "red"
          }}
        >
          HOME
        </NavLink>
      </li>
      <li style={{ listStyle: "none" }}>
        <NavLink
          to="/story"
          activeStyle={{
            fontWeight: "bold",
            color: "red"
          }}
        >
          STORY
        </NavLink>
      </li>
    </ul>
  );
};
