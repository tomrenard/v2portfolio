import { graphql } from 'gatsby';
import React from 'react';
import Cursor from '../components/Cursor';
import Header from '../components/Header';
import Projects from '../components/Projects';

export default function index({ data }) {
  const { projects } = data;
  return (
    <>
      {/* <Cursor /> */}
      <Header />
      <Projects projects={projects} />
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
