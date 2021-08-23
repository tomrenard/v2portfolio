import React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.footer`
  display: flex;
  justify-content: space-between;
  p {
    font-weight: 500;
    margin: 1rem;
  }
`;

export default function NavFooter() {
  return (
    <>
      <FooterStyles>
        <div>
          <p>ABOUT</p>
        </div>
        <div>
          <p>PROJECTS</p>
        </div>
      </FooterStyles>
    </>
  );
}
