import React from 'react';
import styled from 'styled-components';
import { GiBeveledStar } from 'react-icons/gi';

const SectionHPStyles = styled.section`
  height: 100vh;
  border: 2px solid purple;
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
      <GiBeveledStar />
      <TitleProjectsStyles>
        <div className="port-cont">
          <div className="scroll">
            <h1>PORTFOLIO</h1>
          </div>
        </div>
      </TitleProjectsStyles>
      <p data-sal="fade" data-sal-duration="800" data-sal-delay="900">
        {info.headercontent}
      </p>
    </SectionHPStyles>
  );
}
