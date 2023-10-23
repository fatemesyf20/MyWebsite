import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa6";
import { animateScroll as scroll } from "react-scroll";
import {
  MobileIcon,
  Nav,
  NavBtn,
  NavBtnLink,
  NavItems,
  NavLinks,
  NavLogo,
  NavbarContainer,
  Navmenu,
  SigninIcon,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  const [scrollNav, setsScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setsScrollNav(true);
    } else {
      setsScrollNav(false);
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
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo
            to="/"
            onClick={toggleHome}
            smooth={true}
            duration={500}
            spy={true}
            offset={0}
          >
            Fateme
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <Navmenu>
            <NavItems>
              <NavLinks
                to="/"
                onClick={toggleHome}
                smooth={true}
                duration={500}
                spy={true}
                offset={0}
              >
                Home
              </NavLinks>
              <NavLinks
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
              >
                About
              </NavLinks>
              <NavLinks
                to="skills"
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
              >
                Skills
              </NavLinks>
              <NavLinks
                to="projects"
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
              >
                Projects
              </NavLinks>
              <NavLinks
                to="contactMe"
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
              >
                Contact Me
              </NavLinks>
            </NavItems>
          </Navmenu>
          <NavBtn>
            <NavBtnLink>
              Sign in <SigninIcon />
            </NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
