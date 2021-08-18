import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';
import NavFooter from './NavFooter';
// import Typewriter from 'typewriter-effect';
// import Img from 'gatsby-image';

const SectionHeaderStyles = styled.header`
  height: 99vh;
  border: 1px solid red;
  .header-container {
    height: 100%;
    border: 1px solid green;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

const TitleHeaderStyles = styled.div`
  display: flex;
  h1 {
    font-size: 25vw;
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

export default function Header() {
  const data = useStaticQuery(graphql`
    query Header {
      profilePic: sanityAsset(title: { eq: "Profile picture" }) {
        title
        headercontent
        image {
          asset {
            fluid(maxWidth: 800) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  `);
  const { profilePic } = data;
  return (
    <SectionHeaderStyles>
      <div className="header-container">
        <Nav />
        <TitleHeaderStyles>
          <h1 data-sal="fade" data-sal-duration="800" data-sal-delay="800">
            <span>Front-End</span>
            <span>Developer</span>
          </h1>
          {/* <p data-sal="fade" data-sal-duration="800" data-sal-delay="900">
          {profilePic.headercontent}
        </p> */}
        </TitleHeaderStyles>
        <NavFooter />
      </div>
    </SectionHeaderStyles>
  );
}
