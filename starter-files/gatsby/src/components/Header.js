import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
// import Typewriter from 'typewriter-effect';
// import Img from 'gatsby-image';

const SectionHeaderStyles = styled.header`
  margin: 2rem 4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  max-height: 98vh;
  .Typewriter__cursor {
    color: var(--beige);
  }
  p {
    font-size: 1.3rem;
    font-weight: 300;
  }
`;

const TitleHeaderStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 4rem;
  h1 {
    font-size: 23vw;
    line-height: 0.7;
    font-weight: 100;
    text-transform: uppercase;
    display: flex;
    text-align: left;
    flex-direction: column;
  }
`;

const LinkHeaderStyles = styled.div`
  display: flex;
  justify-content: space-between;
  p,
  a {
    text-transform: uppercase;
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
          <span>I am a</span>
          <span>Developer</span>
        </h1>
      </TitleHeaderStyles>
      <div className="img-container">
        {/* <Img fluid={profilePic.image.asset.fluid} alt={profilePic.Title} /> */}
      </div>
      <p>{profilePic.headercontent}</p>
    </SectionHeaderStyles>
  );
}
