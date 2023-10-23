import styled from "styled-components";

export const InfoContainer = styled.div`
  z-index: 100;
  color: #fff;
  background: #272727;
  @media screen and (max-width: 768px) {
    padding: 50px 0;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 100;
  height: 700px;
  width: 100%;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `"col2 col1" ` : `"col1 col2"`};
  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `"col2" "col1" ` : `"col1" "col2"`};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 30px;
`;

export const Heading = styled.h2`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 700;
  color: #f9f9f9;
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;
export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 1.5rem;
  color: #f9f9f9;
  @media screen and (max-width: 768px) {
    max-width: 440px;
    margin-bottom: 29px;
    font-size: 16px;
  }
`;

export const ImgWrap = styled.div`
  z-index: 10;
  max-width: 400px;
  height: 100%;
`;
export const Img = styled.img`
  width: 100%;
  margin-left: 10px;
  padding-right: 0;
  @media screen and (max-width: 768px) {
    width: 70%;
    margin-left: 10px;
    padding-right: 0;
  }
`;
