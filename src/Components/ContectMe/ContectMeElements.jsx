import styled from "styled-components";
import { FaGithub, FaInstagram, FaLinkedin, FaTelegram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export const ContectMeContainer = styled.div`
  z-index: 100;

  background: #272727;
  @media screen and (max-width: 768px) {
    padding: 50px 0;
  }
`;

export const ContectMeWrapper = styled.div`
  z-index: 100;
  display: flex;
  height: 700px;
  width: 100%;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const ContectMeRow = styled.div`
  display: flex;
  align-items: stretch;
  width: 100%;
  justify-content: space-around;
  flex-direction: column;
`;

export const Column1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 15px;
  padding: 0 15px;
`;

export const Column2 = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  padding: 0 15px;
`;

export const GitI = styled(FaGithub)`
  color: #000;
  font-size: 80px;
  cursor: pointer;
  &:hover {
    transition: all 0.3 ease-in-out;
    transform: scale(1.1);
  }
`;

export const InsI = styled(FaInstagram)`
  color: #a5389f;
  font-size: 80px;
  cursor: pointer;
  &:hover {
    transition: all 0.3 ease-in-out;
    transform: scale(1.1);
  }
`;

export const GmailI = styled(SiGmail)`
  color: #c5211f;
  font-size: 80px;
  cursor: pointer;
  &:hover {
    transition: all 0.3 ease-in-out;
    transform: scale(1.1);
  }
`;

export const TelegramI = styled(FaTelegram)`
  color: #29a8eb;
  font-size: 80px;
  cursor: pointer;
  &:hover {
    transition: all 0.3 ease-in-out;
    transform: scale(1.1);
  }
`;
export const LinkdinI = styled(FaLinkedin)`
  color: #0077b4;
  font-size: 80px;
  cursor: pointer;
  &:hover {
    transition: all 0.3 ease-in-out;
    transform: scale(1.1);
  }
`;
