import React from 'react';
import styled from 'styled-components';
import Icone from './Icone';

const SectionHPStyles = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  .intro-content-container {
    display: flex;
    justify-content: center;
    @media (max-width: 800px) {
      margin: 0 1rem;
    }
  }
  .intro-content {
    max-width: 500px;
  }
`;

const TitleProjectsStyles = styled.div`
  .port-cont {
    max-width: 100%;
    overflow: hidden;
  }
  .scroll {
    white-space: nowrap;
    overflow: hidden;
    display: inline-block;
    animation: scroll 12s linear infinite;
  }
  @keyframes scroll {
    0% {
      transform: translate3d(-100%, 0, 0);
    }
    100% {
      transform: translate3d(100%, 0, 0);
    }
  }
  h1 {
    font-size: 20vw;
  }
`;

export default function HeaderProjects({ info, scrollY }) {
  return (
    <SectionHPStyles className="about">
      <div
        style={{ display: 'flex', justifyContent: 'center', marginTop: '4rem' }}
      >
        <Icone scrollY={scrollY} />
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
          <p>{info.headercontent}</p>
          <p>{info.stack}</p>
        </div>
      </div>
    </SectionHPStyles>
  );
}
