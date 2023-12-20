import React from "react";
import { NavLink } from "react-router-dom";
// import "./"
const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink className="home" to="about">
        Home
      </NavLink>
      <NavLink className="home" to="/">
        add
      </NavLink>
      <NavLink className="users" to="users">
        Products
      </NavLink>
    </div>
  );
};

export default Navbar;
