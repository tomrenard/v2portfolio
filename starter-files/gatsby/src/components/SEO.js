/* eslint-disable react/jsx-curly-brace-presence */
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

export default function SEO({ children, location, description, title, image }) {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  return (
    <>
      <Helmet titleTemplate={`${site.siteMetadata.title} - %s`}>
        <html lang="en" />
        <title>{title}</title>
      </Helmet>
    </>
  );
}
