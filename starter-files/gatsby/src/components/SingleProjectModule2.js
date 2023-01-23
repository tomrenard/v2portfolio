import React from 'react';
import styled from 'styled-components';

const SingleProjectModule2Styles = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 3rem auto;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  p {
    margin: 1rem;
    span {
      font-weight: bolder;
    }
    a {
      text-decoration: underline;
    }
  }
  .hosting {
    font-style: italic;
  }
  .description-container {
    max-width: 400px;
    min-width: 300px;
  }
`;

export default function SingleProjectModule2({ project }) {
  const isLink = project.link;
  return (
    <SingleProjectModule2Styles>
      <div className="letter-container">
        <p>.context</p>
      </div>
      <div className="description-container">
        <p>{project.description}</p>
        <p>
          <span>Role:</span> {project.role}
        </p>
        <p>
          <span>Stack:</span> {project.stack}
        </p>
        <p className="hosting">Hosted via {project.host}</p>
        {isLink && (
          <>
            <p>
              You can visit the website{' '}
              <a href={project.link} target="_blank" rel="noreferrer">
                here
              </a>
              .
            </p>
          </>
        )}
      </div>
    </SingleProjectModule2Styles>
  );
}
