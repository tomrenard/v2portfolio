import { graphql } from 'gatsby';
import React from 'react';
import Contact from '../components/Contact';
import Cursor from '../components/Cursor';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HeaderProjects from '../components/HeaderProjects';
import Projects from '../components/Projects';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';

export default function index({ data }) {
  const { projects, profilePic } = data;
  return (
    <>
      <GlobalStyles />
      <Typography />
      <>
        <Header />
        <HeaderProjects info={profilePic} />
        <Projects projects={projects} />
        <Contact />
      </>
    </>
  );
}

export const query = graphql`
  query ProjectQuery {
    projects: allSanityProject {
      nodes {
        name
        description
        image {
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
