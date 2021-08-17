import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const NavStyles = styled.nav`
  margin: 1rem;
  display: flex;
  justify-content: space-between;
  .menu a {
    padding-left: 1rem;
  }
`;

export default function Nav() {
  return (
    <NavStyles data-sal="fade" data-sal-duration="800" data-sal-delay="400">
      <Link to="/">TOM RENARD</Link>
      <div className="menu">
        <Link to="/">RESUME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/contact">CONTACT</Link>
      </div>
    </NavStyles>
  );
}
