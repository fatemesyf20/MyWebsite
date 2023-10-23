import React from "react";
import {
  CloseIcon,
  SidebarContainer,
  Icon,
  SideBtnWrap,
  SidebarRoute,
  SidebarLink,
  SidebarMenu,
  SidebarWrapper,
} from "./SidebarElements";

function Sidebar({ toggle, isOpen }) {
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink onClick={toggle} to="">
              Home
            </SidebarLink>
            <SidebarLink onClick={toggle} to="about">
              About
            </SidebarLink>
            <SidebarLink onClick={toggle} to="skills">
              Skills
            </SidebarLink>
            <SidebarLink onClick={toggle} to="priject">
              Project
            </SidebarLink>
            <SidebarLink onClick={toggle} to="contactme">
              Contact Me
            </SidebarLink>
            <br></br>
          </SidebarMenu>
          <SideBtnWrap>
            <SidebarRoute to="/signin">Sign in</SidebarRoute>
          </SideBtnWrap>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
}

export default Sidebar;
