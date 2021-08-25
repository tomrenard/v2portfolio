import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import Icone from './Icone';

const SectionContactStyles = styled.section`
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  .contact-container {
    display: flex;
    justify-content: center;
    @media (max-width: 800px) {
      margin: 0 1rem;
    }
  }
  .contact-content {
    max-width: 500px;
    p {
      text-transform: uppercase;
    }
  }
`;

const TitleContactStyles = styled.div`
  .title-cont {
    max-width: 100%;
    overflow: hidden;
  }
  .scroll2 {
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
    font-size: 22vw;
  }
`;

export default function Contact({ scrollY }) {
  return (
    <>
      <SectionContactStyles className="contact">
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '4rem',
          }}
        >
          <Icone scrollY={scrollY} />
        </div>
        <TitleContactStyles>
          <div className="title-cont">
            <div className="scroll2">
              <h1>REACH OUT</h1>
            </div>
          </div>
        </TitleContactStyles>
        <div className="contact-container">
          <div className="contact-content">
            <p>
              If you have a freelance project or if your company is interested
              in my profile, feel free to send me an email -
              <span style={{ textTransform: 'lowercase' }}>
                <a
                  style={{ paddingLeft: '4px', fontWeight: 'bolder' }}
                  href="mailto: tom.renard@zoho.com"
                >
                  tom.renard@zoho.com
                </a>
                .
              </span>
            </p>
          </div>
        </div>
      </SectionContactStyles>
      <Footer />
    </>
  );
}
