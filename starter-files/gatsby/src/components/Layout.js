import React from 'react';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import Cursor from './Cursor';
import Footer from './Footer';
import Nav from './Nav';

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <>
        <Nav />
        {children}
        <Cursor />
        <Footer />
      </>
    </>
  );
}
