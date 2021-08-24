import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';
import NavFooter from './NavFooter';
// import Typewriter from 'typewriter-effect';
// import Img from 'gatsby-image';

const SectionHeaderStyles = styled.header`
  height: 100vh;
  .header-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  @media (max-width: 400px) {
    height: 92vh;
  }
`;

const TitleHeaderStyles = styled.div`
  display: flex;
  h1 {
    font-size: 22vw;
    line-height: 0.7;
    font-weight: 100;
    margin: auto;
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
  }
  p {
    text-align: left;
    font-size: 1.3rem;
  }
`;

export default function Header({ scrollY }) {
  return (
    <SectionHeaderStyles className="home">
      <div className="header-container">
        <Nav scrollY={scrollY} />
        <TitleHeaderStyles>
          <h1 data-sal="fade" data-sal-duration="800" data-sal-delay="800">
            <span>Front-End</span>
            <span>Developer</span>
          </h1>
        </TitleHeaderStyles>
        <NavFooter />
      </div>
    </SectionHeaderStyles>
  );
}
