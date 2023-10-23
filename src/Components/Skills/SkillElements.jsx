import styled from "styled-components";
import { FaReact, FaJs, FaCss3Alt, FaHtml5 } from "react-icons/fa";

export const InfoContainer = styled.div`
  z-index: 100;
  color: #fff;
  background: #272727;
  padding-top: 150px;
  @media screen and (max-width: 768px) {
    padding: 50px 0;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  z-index: 100;
  height: 500px;
  width: 100%;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 24px;
  justify-content: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const InfoIcon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
`;

export const HtmlI = styled(FaHtml5)`
  color: #dd4b24;
  margin-right: 5px;
  font-size: 1.3rem;
`;

export const CssI = styled(FaCss3Alt)`
  color: #254bdc;
  margin-right: 5px;
  font-size: 1.3rem;
`;

export const JsI = styled(FaJs)`
  color: #f0d81e;
  margin-right: 5px;
  font-size: 1.3rem;
`;

export const ReactI = styled(FaReact)`
  color: #149fca;
  margin-right: 5px;
  font-size: 1.3rem;
`;
