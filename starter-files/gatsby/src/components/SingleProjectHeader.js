import React from 'react';
import styled from 'styled-components';

const SectionSingleProjectHeaderStyles = styled.section`
  height: 80vh;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

const ProjectStyles = styled.div`
  h1 {
    font-size: 20vw;
    margin: 1rem;
    text-transform: uppercase;
  }
`;

export default function SingleProjectHeader({ project }) {
  return (
    <SectionSingleProjectHeaderStyles>
      <ProjectStyles>
        <h1>{project.name}</h1>
      </ProjectStyles>
    </SectionSingleProjectHeaderStyles>
  );
}
