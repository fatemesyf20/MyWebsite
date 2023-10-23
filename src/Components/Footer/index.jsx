import React from "react";
import {
  FooterContainer,
  FooterLink,
  FooterLinkTitle,
  FooterLinksContainer,
  FooterLinksItem,
  FooterLinksWrapper,
  FooterWrap,
  SocialLogo,
  SocialMediaContainer,
  SocialMediaWrap,
  WebsiteRights,
} from "./FooterElementes";
const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinksItem>
                <FooterLinkTitle>That's All</FooterLinkTitle>
                <FooterLink to="/">Home</FooterLink>
                <FooterLink to="about">About</FooterLink>
                <FooterLink to="skills">Skills</FooterLink>
                <FooterLink to="projects">Projects</FooterLink>
                <FooterLink to="contactMe">Contact Me</FooterLink>
              </FooterLinksItem>
            </FooterLinksWrapper>
          </FooterLinksContainer>
          <SocialMediaContainer>
            <SocialMediaWrap>
              <SocialLogo to="/">Fateme</SocialLogo>
              <WebsiteRights>© Fateme copy rights 2023</WebsiteRights>
            </SocialMediaWrap>
          </SocialMediaContainer>
        </FooterWrap>
      </FooterContainer>
    </>
  );
};

export default Footer;
