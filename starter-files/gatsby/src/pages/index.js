import { graphql } from 'gatsby';
import React from 'react';
import Header from '../components/Header';

export default function index({ data }) {
  const { projects } = data;
  return (
    <>
      <Header />
    </>
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
