import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

const TitleProjectsStyles = styled.div`
  margin: 6rem 0;
  .port-cont {
    max-width: 100%;
    overflow: hidden;
  }
  .scroll {
    white-space: nowrap;
    overflow: hidden;
    display: inline-block;
    animation: scroll 15s linear infinite;
  }
  @keyframes scroll {
    0% {
      transform: translate3d(-100%, 0, 0);
    }
    100% {
      transform: translate3d(120%, 0, 0);
    }
  }
  h1 {
    font-size: 23vw;
  }
`;

const ProjectsStyles = styled.div`
  margin: 2rem 4rem;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 2rem;
  .img-project-container {
    width: 100%;
  }
`;

export default function Projects({ projects }) {
  return (
    <>
      <TitleProjectsStyles>
        <div className="port-cont">
          <div className="scroll">
            <h1>PORTFOLIO</h1>
          </div>
        </div>
      </TitleProjectsStyles>
      <div>
        {projects.nodes.map((project, i) => (
          <ProjectsStyles key={`projects-${i}`}>
            <div className="img-project-container">
              <Img fluid={project.image.asset.fluid} alt={project.name} />
            </div>
            <div>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </div>
          </ProjectsStyles>
        ))}
      </div>
    </>
  );
}
