import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

const SectionProjectStyles = styled.section`
  height: 100vh;
  border: 2px solid yellow;
`;

const ProjectsStyles = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  .img-project-container {
    width: 100%;
  }
`;

export default function Projects({ projects }) {
  return (
    <SectionProjectStyles>
      <div>
        {projects.nodes.map((project, i) => (
          <ProjectsStyles key={`projects-${i}`}>
            <div
              data-sal="slide-right"
              data-sal-duration="800"
              data-sal-delay="800"
              className="img-project-container"
            >
              <Img fluid={project.image.asset.fluid} alt={project.name} />
            </div>
            <div
              data-sal="slide-left"
              data-sal-duration="800"
              data-sal-delay="800"
            >
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </div>
          </ProjectsStyles>
        ))}
      </div>
    </SectionProjectStyles>
  );
}
