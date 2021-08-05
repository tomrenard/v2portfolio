import React from 'react';
import styled from 'styled-components';

const SectionHeaderStyles = styled.header`
  display: flex;
  margin: 3rem 1rem;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  h1 {
    font-size: 10rem;
    font-weight: 100;
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
    width: 100%;
    line-height: 0.8;
  }
`;

export default function Header() {
  return (
    <SectionHeaderStyles>
      <h1>
        <span>Front-end</span>
        <span>Developer</span>
      </h1>
    </SectionHeaderStyles>
  );
}
