import React from 'react';
import styled from 'styled-components';

const SectionHeaderStyles = styled.header`
  margin: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  max-height: 98vh;
`;

const TitleHeaderStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 23vw;
    font-weight: 100;
    text-transform: uppercase;
    display: flex;
    padding: 4rem 0;
    flex-direction: column;
  }
`;

const LinkHeaderStyles = styled.div`
  display: flex;
  justify-content: space-between;
  p {
    text-transform: uppercase;
  }
`;

export default function Header() {
  return (
    <SectionHeaderStyles>
      <TitleHeaderStyles>
        <h1>
          <span>Front-End</span>
          <span>Developer</span>
        </h1>
      </TitleHeaderStyles>
      <LinkHeaderStyles>
        <p>About</p>
        <p>Resume</p>
      </LinkHeaderStyles>
    </SectionHeaderStyles>
  );
}
