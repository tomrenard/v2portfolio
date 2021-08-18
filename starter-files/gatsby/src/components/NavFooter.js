import React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.footer`
  display: flex;
  justify-content: space-between;
  p {
    font-weight: 500;
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
          <p>SCROLL</p>
        </div>
      </FooterStyles>
    </>
  );
}
