import { createGlobalStyle } from 'styled-components';

import font from '../assets/fonts/Livia-Medium.woff';

const Typography = createGlobalStyle`
@font-face {
  font-family: 'Livia-Medium';
  src: url(${font}) format('woff');
}
  html {
    font-family: 'Work Sans', sans-serif;
    color: black;
  }
  body {
    background: var(--beige);
    font-size: 1rem;
  }
  p, li, h3, h4, h5, h6 {
    letter-spacing: 0.5px;
  }

  p {
    font-weight: 300;
  }
  a {
    color: black;
    text-decoration: none;
    text-decoration-skip-ink: none;
  }
  h1, h2, h3 {
    font-family: 'Livia-Medium';
    font-weight: 100;
  }
`;

export default Typography;
