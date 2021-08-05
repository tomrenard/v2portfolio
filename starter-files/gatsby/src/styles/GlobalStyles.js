import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --beige: #EFE5DF;
  }
  body {
    font-size: 1rem;
    height: 100%;
    margin: 0;
    max-width: 100%;
    overflow-x: hidden;
    cursor: none;
  }

  * {
    cursor: none;
  }

  a {
    cursor: none;
  }

  h1,h2,h3,h4,h5 {
    margin: 0;
  }

  ol, ul {
    list-style: none;
  }
  .cursor {
    width: 0.3rem;
    height: 0.3rem;
    border: 1px solid black;
    border-radius: 50%;
    position: absolute;
    pointer-events: none;
  }
`;

export default GlobalStyles;
