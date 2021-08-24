import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import Icone from './Icone';

const SectionProjectStyles = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  .projects {
    display: flex;
    justify-content: start;
    h3 {
      text-transform: uppercase;
      padding-left: 1rem;
      font-size: 7vw;
    }
  }
`;

const ProjectsStyles = styled.div`
  display: flex;
  justify-content: center;
  .numbers {
    display: flex;
    align-items: flex-end;
  }
`;

export default function Projects({ projects, scrollY }) {
  return (
    <SectionProjectStyles className="proj">
      <Icone scrollY={scrollY} />
      <ProjectsStyles>
        <div>
          {projects.nodes.map((project, i) => (
            <div className="projects" key={`${i}-projects`}>
              <div className="numbers">
                <p>{`00${i + 1}`}</p>
              </div>
              <h3>{project.name}</h3>
            </div>
          ))}
        </div>
      </ProjectsStyles>
      <Icone scrollY={scrollY} />
    </SectionProjectStyles>
  );
}
