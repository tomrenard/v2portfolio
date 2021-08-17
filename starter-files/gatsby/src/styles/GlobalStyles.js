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
    &hover {
      color: var(--beige);
    }
  }

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
      background-color: var(--beige);
      z-index: -1000;
      width: 0.8rem;
      height: 0.8rem;
    }
  }
`;

export default GlobalStyles;
