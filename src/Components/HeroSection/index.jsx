import React, { useState } from "react";
import imageBack3 from "../../Images/ImageBack.jpg";
import {
  HeroBg,
  ImageBg,
  HeroContainer,
  HeroH1,
  HeroP,
  ProfileImg,
} from "./HeroElements";

import profImg from "../../Images/profImg2.jpg";

const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => setHover(!hover);

  return (
    <>
      <HeroContainer>
        <HeroBg>
          <ImageBg>
            <ProfileImg src={profImg} />
            <HeroH1>JS Is Queen </HeroH1>
            <HeroP>Fateme Seyfolahi</HeroP>
            <HeroP>Front-end Developer</HeroP>
          </ImageBg>
        </HeroBg>
      </HeroContainer>
    </>
  );
};

export default HeroSection;
