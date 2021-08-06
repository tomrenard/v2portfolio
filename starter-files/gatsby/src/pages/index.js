import { graphql } from 'gatsby';
import React from 'react';
import Cursor from '../components/Cursor';
import Header from '../components/Header';
import Projects from '../components/Projects';

export default function index({ data }) {
  const { projects } = data;
  return (
    <div>
      <Cursor />
      <Header />
      <Projects />
    </div>
  );
}

export const query = graphql`
  query ProjectQuery {
    projects: allSanityProject {
      edges {
        node {
          name
        }
      }
    }
  }
`;
