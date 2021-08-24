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
    @media (max-width: 900px) {
      align-items: center;
      p {
        font-size: 0.5rem;
      }
    }
    h3 {
      text-transform: uppercase;
      padding-left: 1rem;
      font-size: 7vw;
      @media (max-width: 400px) {
        font-size: 9vw;
      }
    }
  }
  @media (max-width: 400px) {
    .none {
      display: none;
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
      <div className="none">
        <Icone scrollY={scrollY} />
      </div>
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
      <div className="none">
        <Icone scrollY={scrollY} />
      </div>
    </SectionProjectStyles>
  );
}
