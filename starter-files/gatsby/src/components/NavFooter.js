import scrollTo from 'gatsby-plugin-smoothscroll';
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
          <button type="button" onClick={() => scrollTo('.about')}>
            ABOUT
          </button>
        </div>
        <div>
          <button type="button" onClick={() => scrollTo('.projects')}>
            PROJECTS
          </button>
        </div>
      </FooterStyles>
    </>
  );
}
