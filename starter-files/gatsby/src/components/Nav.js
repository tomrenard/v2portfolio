import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const NavStyles = styled.nav`
  margin: 1rem;
  display: flex;
  justify-content: space-between;
`;

export default function Nav() {
  return (
    <NavStyles>
      <Link to="/">TOM RENARD</Link>
      <Link to="/">CONTACT</Link>
    </NavStyles>
  );
}
