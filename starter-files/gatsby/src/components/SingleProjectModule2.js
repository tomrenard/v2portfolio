import React from 'react';
import styled from 'styled-components';

const SingleProjectModule2Styles = styled.div`
  display: flex;
  margin: 3rem;
  justify-content: space-between;
  align-items: center;
  .description-container {
    max-width: 400px;
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
