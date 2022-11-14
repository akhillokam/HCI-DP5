import React from "react";
import {
  Nav,
  NavLogo,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLogo to="/">HealthyHurricanes</NavLogo>
        <Bars />

        <NavMenu>
          <NavLink to="/" activeStyle={{ color: "black" }}>
            Home
          </NavLink>
          <NavLink to="/faq" activeStyle={{ color: "black" }}>
            FAQ
          </NavLink>
          <NavLink to="/login" activeStyle={{ color: "black" }}>
            Login
          </NavLink>
          <NavBtn>
            <NavBtnLink to="/register">Register</NavBtnLink>
          </NavBtn>
        </NavMenu>
      </Nav>
    </>
  );
};
export default Navbar;
