import { Link } from 'gatsby';
import scrollTo from 'gatsby-plugin-smoothscroll';
import React from 'react';
import styled from 'styled-components';

const NavStyles = styled.nav`
  display: flex;
  justify-content: space-between;
`;

export default function Nav() {
  return (
    <NavStyles>
      <button type="button" onClick={() => scrollTo('.home')}>
        TOM RENARD
      </button>
      <div className="menu">
        <button type="button" onClick={() => scrollTo('.contact')}>
          CONTACT
        </button>
      </div>
    </NavStyles>
  );
}
