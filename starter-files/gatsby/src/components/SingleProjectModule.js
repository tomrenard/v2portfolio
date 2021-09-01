import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { HiExternalLink } from 'react-icons/fa';

const SingleProjectModuleStyles = styled.div`
  max-width: 1200px;
  margin: auto;
  .container-h-img {
    position: relative;
    border: 6px solid black;
  }
  .text-link {
    background: var(--beige);
    padding: 1rem;
    opacity: 0;
    position: absolute;
    top: 50%;
    right: 40%;
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
        <div className="container-h-img">
          <p className="text-link">Click to visit the website</p>
          <Img fluid={project.image.asset.fluid} alt={project.name} />
        </div>
      </a>
    </SingleProjectModuleStyles>
  );
}
