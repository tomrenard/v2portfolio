import React from 'react';
import styled from 'styled-components';
import { GiBeveledStar } from 'react-icons/gi';

const SectionHPStyles = styled.section`
  height: 100vh;
  border: 2px solid purple;
  .intro-content-container {
    display: flex;
    justify-content: center;
  }
  .intro-content {
    margin: 4rem 2rem;
    max-width: 500px;
    p {
      text-transform: uppercase;
    }
  }
`;

const TitleProjectsStyles = styled.div`
  .port-cont {
    margin-top: 10rem;
    max-width: 100%;
    overflow: hidden;
  }
  .scroll {
    white-space: nowrap;
    overflow: hidden;
    display: inline-block;
    animation: scroll 15s linear infinite;
  }
  @keyframes scroll {
    0% {
      transform: translate3d(-100%, 0, 0);
    }
    100% {
      transform: translate3d(120%, 0, 0);
    }
  }
  h1 {
    font-size: 22vw;
  }
`;

export default function HeaderProjects({ info }) {
  return (
    <SectionHPStyles>
      <div
        style={{ display: 'flex', justifyContent: 'center', marginTop: '4rem' }}
      >
        <GiBeveledStar
          style={{
            fontSize: '3rem',
          }}
        />
      </div>
      <TitleProjectsStyles>
        <div className="port-cont">
          <div className="scroll">
            <h1>PORTFOLIO</h1>
          </div>
        </div>
      </TitleProjectsStyles>
      <div className="intro-content-container">
        <div className="intro-content">
          <p data-sal="fade" data-sal-duration="800" data-sal-delay="900">
            {info.headercontent}
          </p>
        </div>
      </div>
    </SectionHPStyles>
  );
}
