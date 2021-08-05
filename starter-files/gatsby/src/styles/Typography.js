import { createGlobalStyle } from 'styled-components';

import font from '../assets/fonts/Sentient-Extralight.woff';

const Typography = createGlobalStyle`
@font-face {
  font-family: 'Sentient-Extralight';
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
  p, li {
    letter-spacing: 0.5px;
  }
  a {
    color: black;
    text-decoration: none;
    text-decoration-skip-ink: none;
  }
  h1, h2 {
    font-family: 'Sentient-Extralight';
    font-weight: 100;
  }
`;

export default Typography;
