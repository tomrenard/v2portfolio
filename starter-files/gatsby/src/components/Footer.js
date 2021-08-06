import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.footer`
  display: flex;
  justify-content: space-between;
  margin: 1rem;
  ul {
    padding: 0;
  }
  ul li {
    display: inline-block;
    padding-right: 1rem;
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
      <div className="social">
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/tom-renard-2021/">LINKEDIN</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/tom-renard-2021/">GITHUB</a>
          </li>
        </ul>
      </div>
      <div>
        <p>CODED BY &copy; TOM RENARD {new Date().getFullYear()} </p>
      </div>
    </FooterStyles>
  );
}
