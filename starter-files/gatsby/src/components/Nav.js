import { Link } from 'gatsby';
import scrollTo from 'gatsby-plugin-smoothscroll';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const SectionStylesNav = styled.section`
  display: flex;
  justify-content: space-between;
`;

const NavStyles = styled.nav`
  position: fixed;
  height: 4rem;
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &.scrolled {
    background: var(--beige);
  }
`;

export default function Nav() {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  });
  return (
    <SectionStylesNav>
      <NavStyles className={offset > 100 ? 'scrolled' : ''}>
        <Link style={{ margin: '1rem' }} to="/">
          TOM RENARD
        </Link>
        <div className="menu">
          <button type="button" onClick={() => scrollTo('.contact')}>
            CONTACT
          </button>
        </div>
      </NavStyles>
    </SectionStylesNav>
  );
}
