import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { HiExternalLink } from 'react-icons/fa';

const SingleProjectModuleStyles = styled.div`
  max-width: 1200px;
  margin: auto;
  position: relative;
  .text-link {
    background: var(--beige);
    padding: 1rem;
    opacity: 0;
    position: absolute;
    top: 50%;
    right: 38%;
    z-index: 1000;
  }
  Img:hover {
    filter: grayscale(1);
  }
  a:hover .text-link {
    opacity: 1;
    text-decoration: underline;
  }
  a:hover Img {
    filter: grayscale(1);
  }
`;

export default function SingleProjectModule({ project }) {
  return (
    <SingleProjectModuleStyles>
      <a href={project.link} target="_blank" rel="noreferrer">
        <p className="text-link">Click to visit the website</p>
        <Img fluid={project.image.asset.fluid} alt={project.name} />
      </a>
    </SingleProjectModuleStyles>
  );
}
