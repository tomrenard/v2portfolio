import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';

const SectionContactStyles = styled.section`
  height: 100vh;
  border: 2px solid blue;
`;

export default function Contact() {
  return (
    <SectionContactStyles>
      <p>Icone</p>
      <p>
        If you have a general or project enquiry, please drop me an email -
        available now.
      </p>
      <p>SEND AN EMAIL</p>
      <Footer />
    </SectionContactStyles>
  );
}
