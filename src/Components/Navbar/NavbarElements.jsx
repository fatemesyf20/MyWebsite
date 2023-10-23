import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import { BsPersonCircle } from "react-icons/bs";

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? "#272727" : "#transparent")};
  display: flex;
  margin-top: -80px;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 9;

  -webkit-box-shadow: ${({ scrollNav }) =>
    scrollNav ? "3px 13px 84px -6px rgba(0, 0, 0, 0.75)" : ""};

  -moz-box-shadow: ${({ scrollNav }) =>
    scrollNav ? "3px 13px 84px -6px rgba(0, 0, 0, 0.75)" : ""};
  box-shadow: ${({ scrollNav }) =>
    scrollNav ? "3px 13px 84px -6px rgba(0, 0, 0, 0.75)" : ""};
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70px;
  max-width: 1100px;
  margin: 0 20px;
`;

export const NavLogo = styled(LinkR)`
  color: #f2f5ee;
  font-size: 1rem;
  text-decoration: none;
  cursor: pointer;
  font-weight: 600;
  letter-spacing: 1px;
`;
export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    color: #f2f5ee;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.4rem;
    cursor: pointer;
  }
`;

export const Navmenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  flex-direction: row;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItems = styled.li`
  display: flex;
  flex-direction: row;

  height: 80px;
`;

export const NavLinks = styled(LinkS)`
  color: #f2f5ee;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  cursor: pointer;
  height: 95%;
  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: #f4f5ee18;
  }
  &.active {
    border-bottom: 3px solid #e2d02e;
    padding-bottom: 5px;
    transition: all 0.1s ease-out;
    transform: scale(1.1);
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const SigninIcon = styled(BsPersonCircle)`
  color: #272727;
  margin-left: 5px;
  font-size: 1rem;
`;
export const NavBtnLink = styled(LinkR)`
  display: flex;
  align-items: center;

  text-decoration: none;
  border-radius: 50px;
  background-color: #c9b929;
  white-space: nowrap;
  padding: 10px 22px;
  color: #272727;
  font-size: 1rem;
  outline: none;
  border: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #f2f5ee;
    transform: scale(1.05);
  }
`;
