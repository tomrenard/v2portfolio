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
  }
  .description-container {
    max-width: 400px;
    min-width: 300px;
  }
`;

export default function SingleProjectModule2({ project }) {
  return (
    <SingleProjectModule2Styles>
      <div className="letter-container">
        <p>.context</p>
      </div>
      <div className="description-container">
        <p>{project.description}</p>
      </div>
    </SingleProjectModule2Styles>
  );
}
