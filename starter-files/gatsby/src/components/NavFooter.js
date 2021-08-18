import React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.footer`
  display: flex;
  justify-content: space-between;
`;

export default function NavFooter() {
  return (
    <>
      <FooterStyles>
        <div>
          <p>MODE</p>
        </div>
        <div>
          <p>SCROLL</p>
        </div>
      </FooterStyles>
    </>
  );
}
