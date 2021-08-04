import { graphql } from 'gatsby';
import React from 'react';

export default function index({ data }) {
  const { projects } = data;
  return (
    <div>
      <p>Hello Portfolio {projects.edges[0].node.name}</p>
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
