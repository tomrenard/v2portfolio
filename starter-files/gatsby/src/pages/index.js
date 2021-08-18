import { graphql } from 'gatsby';
import React from 'react';
import Cursor from '../components/Cursor';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Projects from '../components/Projects';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';

export default function index({ data }) {
  const { projects } = data;
  return (
    <>
      <GlobalStyles />
      <Typography />
      <>
        <Header />
        <Projects projects={projects} />
        <Footer />
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
  }
`;
