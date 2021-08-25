import React from 'react';
import { graphql } from 'gatsby';

export default function SingleProjectPage({ data }) {
  const { project } = data;
  return (
    <div>
      <p>{project.name}</p>
    </div>
  );
}

export const query = graphql`
  query ($slug: String!) {
    project: sanityProject(slug: { current: { eq: $slug } }) {
      name
    }
  }
`;
