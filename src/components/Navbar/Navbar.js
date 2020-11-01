import React, { useState, useEffect } from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink
} from "./NavbarElemnets.js";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
export default function Navbar({ toggle }) {
  const [scrollView, SetscrollView] = useState(false);
  const changeNav = () => {
    if (window.scrollY > 80) {
      SetscrollView(true);
    } else {
      SetscrollView(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <Nav scrollView={scrollView}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            Dolla
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              {/* note here to="about" not "/about" as this will act as id in scrollLink to sdownside application*/}
              <NavLinks
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                About
              </NavLinks>
            </NavItem>

            <NavItem>
              {/* note here to="about" not "/about" as this will act as id in scrollLink to sdownside application*/}
              <NavLinks
                to="discover"
                mooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Disocver
              </NavLinks>
            </NavItem>

            <NavItem>
              {/* note here to="about" not "/about" as this will act as id in scrollLink to sdownside application*/}
              <NavLinks
                to="services"
                mooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Services
              </NavLinks>
            </NavItem>

            <NavItem>
              {/* note here to="about" not "/about" as this will act as id in scrollLink to sdownside application*/}
              <NavLinks
                to="signup"
                mooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Sign Up
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
}
