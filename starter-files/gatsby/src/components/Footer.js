import React from 'react';
import styled from 'styled-components';
import resume from '../ressources/CV-Tom-Renard.pdf';

const FooterStyles = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 1rem;
  margin-right: 1rem;
  position: relative;
  @media (max-width: 800px) {
    flex-direction: column;
  }
  ul {
    padding: 0;
  }
  ul li {
    display: inline-block;
    padding-right: 1rem;
  }
  p {
    font-weight: 500;
  }
`;

export default function Footer() {
  return (
    <>
      <FooterStyles>
        <div className="social">
          <ul>
            <li>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/tom-renard-2021/"
                rel="noreferrer"
              >
                LINKEDIN
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://github.com/tomrenard"
                rel="noreferrer"
              >
                GITHUB
              </a>
            </li>
            <li>
              <a target="_blank" href={resume} rel="noreferrer">
                RESUME
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p>&copy; TOM RENARD {new Date().getFullYear()}</p>
        </div>
      </FooterStyles>
    </>
  );
}
