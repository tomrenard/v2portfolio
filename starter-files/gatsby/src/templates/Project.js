import React, { useEffect, useState } from 'react';
import { graphql } from 'gatsby';
import Nav from '../components/Nav';
import Contact from '../components/Contact';
import SingleProjectHeader from '../components/SingleProjectHeader';
import SingleProjectModule from '../components/SingleProjectModule';
import SingleProjectModule2 from '../components/SingleProjectModule2';
import SingleProjectModule3 from '../components/SingleProjectModule3';

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
    <>
      <Nav />
      <SingleProjectHeader project={project} />
      <SingleProjectModule project={project} />
      <SingleProjectModule2 project={project} />
      <SingleProjectModule3 project={project} />
      <Contact scrollY={scrollY} />
    </>
  );
}

export const query = graphql`
  query ($slug: String!) {
    project: sanityProject(slug: { current: { eq: $slug } }) {
      name
      description
      image {
        asset {
          fluid(maxWidth: 2400) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;
