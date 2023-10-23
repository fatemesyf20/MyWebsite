import styled from "styled-components";

export const HeroContainer = styled.div`
  top: -50px;

  &:before {
    content: "";
    position: absolute;
    top: 0;

    right: 0;
    bottom: 67px;
    left: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgb(0, 0, 0, 0.2) 10%, transparent 100%);
    z-index: 1;
  }
`;

export const HeroBg = styled.section`
  background: url("https://img2.wallspic.com/crops/2/8/2/0/80282/80282-electronic_device-gadget-apple-technology-space_bar-1920x1080.jpg")
    repeat fixed 29%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ImageBg = styled.div`
  z-index: 1;
  padding-top: 10%;
  padding-bottom: 15%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ProfileImg = styled.img`
  border-radius: 50%;
  width: 130px;
  margin-bottom: 7%;
  cursor: pointer;
  &:hover {
    transition: all 0.3s ease-out;
    transform: scale(1.04);
  }
  @media screen and (max-width: 768px) {
    width: 90px;
    margin-top: 10%;
  }
`;
export const HeroH1 = styled.h1`
  z-index: 2;
  text-align: center;
  font-size: 2.5rem;
  letter-spacing: 1%;
  color: #c9b929;
  &::before {
    content: "/>  ";
    font-size: 2.5rem;
    color: #c9b929;
  }
  &::after {
    content: "  <";
    font-size: 2.5rem;
    color: #c9b929;
  }
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
    &::before {
      font-size: 1.5rem;
    }
    &::after {
      font-size: 1.5rem;
    }
  }
`;

export const HeroP = styled.p`
  color: #ffffff;
  font-size: 1.5rem;
  text-align: center;
  margin-top: 25px;
  box-shadow: 2px black;
  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;
