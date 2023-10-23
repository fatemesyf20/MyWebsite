import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #1d1d16;
`;

export const FooterWrap = styled.div`
  max-width: 1100px;
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLinksItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: aliceblue;
  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 16px;
`;

export const FooterLink = styled(LinkS)`
  color: aliceblue;
  text-decoration: none;
  margin-bottom: 0.85rem;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    color: #c9ba39;
    transition: 0.3s ease-out;
  }
`;

export const SocialMediaContainer = styled.div`
  max-width: 100%;
  width: 1000px;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 40px auto 0 auto;
  flex-direction: row;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(LinkR)`
  color: aliceblue;
  display: flex;
  justify-self: flex-start;
  align-items: center;
  font-weight: 650;
  font-size: 1.5rem;
  cursor: pointer;
  text-decoration: none;
  margin-bottom: 16px;
`;

export const WebsiteRights = styled.span`
  color: aliceblue;
  font-size: 1rem;
  margin-bottom: 16px;
`;
