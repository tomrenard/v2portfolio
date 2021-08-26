import { Link } from 'gatsby';
import React from 'react';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';

export default function Four0Four() {
  return (
    <>
      <Typography />
      <GlobalStyles />
      <>
        <div>
          <p>Sorry, that page does not exist.</p>
        </div>
        <div>
          <Link to="/">Click to go back to the main page.</Link>
        </div>
      </>
    </>
  );
}
