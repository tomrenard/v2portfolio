import React from 'react';
import styled from 'styled-components';

const SectionProjectsStyles = styled.section`
  margin: 6rem 0;
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
    font-size: 23vw;
  }
`;

export default function Projects() {
  return (
    <SectionProjectsStyles>
      <div className="port-cont">
        <div className="scroll">
          <h1>PORTFOLIO</h1>
        </div>
      </div>
    </SectionProjectsStyles>
  );
}
