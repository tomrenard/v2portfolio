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
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />
        <meta name="description" content={site.siteMetadata.description} />
        {location && <meta property="og:url" content={location.href} />}
        <meta property="og:image" content={'/logo.jpg'} />
        <meta property="og:title" content={title} key="ogtitle" />
        <meta
          propery="og:site_name"
          content={site.siteMetadata.title}
          key="ogsitename"
        />
        <meta property="og:description" content={description} key="ogdesc" />
        {children}
      </Helmet>
    </>
  );
}
