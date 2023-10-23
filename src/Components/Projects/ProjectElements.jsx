import styled from "styled-components";

export const ProjectsContainer = styled.div`
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #272727;
  @media screen and (max-width: 480px) {
    height: 1100px;
  }
`;

export const ProjectsH1 = styled.h1`
  font-size: 2.5rem;
  color: #ebeff3;
  margin-bottom: 60px;
  @media screen and (max-width: 480px) {
    font-size: 2.2rem;
  }
`;

export const ProjectsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const ProjectsCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  margin: 15px 15px;
  border-radius: 10px;
  padding: 12px;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    transform: scale(0.95);
    transition: all 0.3s ease-in-out;
  }
`;

export const ProjectsIcon = styled.img`
  width: 160px;
  height: 160px;
`;

export const ProjectsH2 = styled.div`
  margin: 0 auto;
  font-size: 1.3rem;
  color: #0f0f0f;
  font-weight: 600;
  text-decoration: none;
  margin-bottom: 10px;
`;

export const ProjectsP = styled.p`
  text-decoration: none;

  font-size: 1rem;
  color: #0f0f0f;
  margin-bottom: 7px;
`;
