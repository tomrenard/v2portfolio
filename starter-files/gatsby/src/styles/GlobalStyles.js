import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --beige: #fff8f5;
  }
  body {
    font-size: 1rem;
    height: 100%;
    margin: 0;
    max-width: 100%;
    overflow-x: hidden;
    /* cursor: none; */
  }

  /* * {
    cursor: none;
  } */

  /* a {
    cursor: none;
  } */

  h1,h2,h3,h4,h5 {
    margin: 0;
  }

  ol, ul {
    list-style: none;
  }
  .cursor {
    width: 0.5rem;
    height: 0.5rem;
    border: 1px solid black;
    border-radius: 50%;
    position: absolute;
    pointer-events: none;
    background-color: black;
    transition: background-color 400ms;
    &.hovered {
      background-color: transparent;
      width: 1rem;
      height: 1rem;
    }
  }
`;

export default GlobalStyles;
