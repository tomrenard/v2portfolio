import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
// import Typewriter from 'typewriter-effect';
// import Img from 'gatsby-image';

const SectionHeaderStyles = styled.header`
  margin: 2rem 4rem;
  display: flex;
  justify-content: center;
  max-height: 98vh;
  max-width: 1200px;
  overflow: hidden;
  .Typewriter__cursor {
    color: var(--beige);
  }
`;

const TitleHeaderStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 4rem;
  flex-direction: column;
  h1 {
    font-size: 13rem;
    line-height: 0.7;
    font-weight: 100;
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
  }
  p {
    font-size: 1.3rem;
    font-weight: 300;
    text-align: left;
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
  console.log(profilePic);
  return (
    <SectionHeaderStyles>
      <TitleHeaderStyles>
        <h1>
          <span>Front-End</span>
          <span>Developer</span>
        </h1>
        <p>{profilePic.headercontent}</p>
      </TitleHeaderStyles>
    </SectionHeaderStyles>
  );
}
