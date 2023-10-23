import React from "react";
import Icon1 from "../../Images/ToDoList.svg";
import Icon2 from "../../Images/SendEmail.svg";
import Icon3 from "../../Images/WeeklyBudget.svg";
import {
  ProjectsCard,
  ProjectsContainer,
  ProjectsH1,
  ProjectsH2,
  ProjectsIcon,
  ProjectsP,
  ProjectsWrapper,
} from "./ProjectElements";

const Projects = () => {
  return (
    <>
      <ProjectsContainer id="projects">
        <ProjectsH1>My last Projects</ProjectsH1>
        <ProjectsWrapper>
          <a href="https://github.com/fatemesyf20/toDoList.git">
            <ProjectsCard>
              <ProjectsIcon src={Icon1} />
              <ProjectsH2>To Do List</ProjectsH2>
              <ProjectsP>Write and delete your notes</ProjectsP>
            </ProjectsCard>
          </a>
          <a href="https://github.com/fatemesyf20/sendingEmail.git">
            <ProjectsCard>
              <ProjectsIcon src={Icon2} />
              <ProjectsH2>Send Email</ProjectsH2>
              <ProjectsP>Check email snd send to your friend</ProjectsP>
            </ProjectsCard>
          </a>
          <a href="https://github.com/fatemesyf20/weeklyBudget.git">
            <ProjectsCard>
              <ProjectsIcon src={Icon3} />
              <ProjectsH2>Weekly Budget</ProjectsH2>
              <ProjectsP>
                Write your weekly buget and manage your money
              </ProjectsP>
            </ProjectsCard>
          </a>
        </ProjectsWrapper>
      </ProjectsContainer>
    </>
  );
};

export default Projects;
