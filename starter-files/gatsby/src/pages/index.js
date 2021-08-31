import { graphql } from 'gatsby';
import React, { useEffect, useState } from 'react';
import Contact from '../components/Contact';
import Header from '../components/Header';
import HeaderProjects from '../components/HeaderProjects';
import Projects from '../components/Projects';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';

export default function Index({ data }) {
  const { projects, profilePic } = data;
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
  return (
    <>
      <GlobalStyles />
      <Typography />
      <>
        <Header scrollY={scrollY} />
        <HeaderProjects scrollY={scrollY} info={profilePic} />
        <Projects scrollY={scrollY} projects={projects} />
        <Contact scrollY={scrollY} />
      </>
    </>
  );
}

export const query = graphql`
  query ProjectQuery {
    projects: allSanityProject {
      nodes {
        name
        slug {
          current
        }
        description
        role
        stack
        host
        image {
          asset {
            fluid(maxWidth: 800) {
              ...GatsbySanityImageFluid
            }
          }
        }
        image2 {
          asset {
            fluid(maxWidth: 800) {
              ...GatsbySanityImageFluid
            }
          }
        }
        image3 {
          asset {
            fluid(maxWidth: 800) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
    profilePic: sanityAsset(title: { eq: "Profile picture" }) {
      title
      headercontent
      stack
      image {
        asset {
          fluid(maxWidth: 800) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;
