import React from "react";
import { Nav, NavLogo, NavLink, Bars, NavMenu } from "../styles/NavbarElements";
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLogo to='/'>Sam</NavLogo>
        <Bars />

        <NavMenu>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/createpost'>Create Post</NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
export default Navbar;
