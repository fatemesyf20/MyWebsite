import React from "react";
import ProgressBar from "react-customizable-progressbar";
import {
  CssI,
  HtmlI,
  InfoContainer,
  InfoIcon,
  InfoWrapper,
  JsI,
  ReactI,
} from "./SkillElements";

const Skills = ({ id }) => {
  return (
    <>
      <InfoContainer id={id}>
        <InfoWrapper>
          <ProgressBar
            radius={100}
            progress={70}
            cut={0}
            rotate={100}
            strokeWidth={15}
            strokeColor="#dd4b24"
            trackStrokeWidth={12}
            trackStrokeColor="#cecdcd"
            pointerRadius={0}
            initialAnimation={true}
            transition="2s ease 0.5s"
            trackTransition="0s ease"
          >
            <InfoIcon>
              <HtmlI />
              <div>HTML</div>
            </InfoIcon>
          </ProgressBar>
          <ProgressBar
            radius={100}
            progress={75}
            cut={0}
            rotate={100}
            strokeWidth={15}
            strokeColor="#254bdc"
            trackStrokeWidth={12}
            trackStrokeColor="#cecdcd"
            pointerRadius={0}
            initialAnimation={true}
            transition="1.5s ease 0.5s"
            trackTransition="0s ease"
          >
            <InfoIcon>
              <CssI />
              <div>CSS</div>
            </InfoIcon>
          </ProgressBar>
          <ProgressBar
            radius={100}
            progress={85}
            cut={0}
            rotate={100}
            strokeWidth={15}
            strokeColor="#f0d81e"
            trackStrokeWidth={12}
            trackStrokeColor="#cecdcd"
            pointerRadius={0}
            initialAnimation={true}
            transition="2s ease 0.5s"
            trackTransition="0s ease"
          >
            <InfoIcon>
              <JsI />
              <div>JS</div>
            </InfoIcon>
          </ProgressBar>
          <ProgressBar
            radius={100}
            progress={40}
            cut={0}
            rotate={100}
            strokeWidth={15}
            strokeColor="#149fca"
            trackStrokeWidth={12}
            trackStrokeColor="#cecdcd"
            pointerRadius={0}
            initialAnimation={true}
            transition="2s ease 0.5s"
            trackTransition="0s ease"
          >
            <InfoIcon>
              <ReactI />
              <div>REACT</div>
            </InfoIcon>
          </ProgressBar>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default Skills;
