import React, { useEffect, useState } from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Nav from '../components/Nav';
import Contact from '../components/Contact';

const SectionProjectStyles = styled.section`
  border: 2px solid red;
`;

const ProjectStyles = styled.div`
  margin-top: 4rem;
`;

export default function SingleProjectPage({ data }) {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const mScroll = () => {
      const posY = window.scrollY;
      setScrollY(posY);
    };
    const addScrollListener = () => {
      window.addEventListener('scroll', mScroll);
    };
    addScrollListener();
  });
  const { project } = data;
  return (
    <SectionProjectStyles>
      <Nav />
      <ProjectStyles>
        <p>{project.name}</p>
      </ProjectStyles>
      <Contact scrollY={scrollY} />
    </SectionProjectStyles>
  );
}

export const query = graphql`
  query ($slug: String!) {
    project: sanityProject(slug: { current: { eq: $slug } }) {
      name
    }
  }
`;
