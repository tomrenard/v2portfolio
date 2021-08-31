// import dotenv from 'dotenv';

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

// dotenv.config({ path: '.env' });

module.exports = {
  siteMetadata: {
    title: `Tom Renard`,
    siteUrl: 'https://www.tomrenard.xyz',
    description: 'Front-End Developer',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-smoothscroll',
    'gatsby-plugin-helmet',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'evpmaulh',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 1, // Percentage of an element's area that needs to be visible to launch animation
        once: true, // Defines if animation needs to be launched once
        disable: false, // Flag for disabling animations

        // Advanced Options
        selector: '[data-sal]', // Selector of the elements to be animated
        animateClassName: 'sal-animate', // Class name which triggers animation
        disabledClassName: 'sal-disabled', // Class name which defines the disabled state
        rootMargin: '0% 50%', // Corresponds to root's bounding box margin
        enterEventName: 'sal:in', // Enter event name
        exitEventName: 'sal:out', // Exit event name
      },
    },
  ],
};
