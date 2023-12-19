'use client';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /*
    Josh's Custom CSS Reset
    https://www.joshwcomeau.com/css/custom-css-reset/
  */
  *, *::before, *::after {
    box-sizing: border-box;
  }
  * {
    margin: 0;
  }
  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }
  input, button, textarea, select {
    font: inherit;
  }
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  /* Local globals */

  html {
    --color-primary-49: hsl(158, 61%, 49%);
    --color-gradient-primary: linear-gradient(150deg, hsl(134, 64%, 51%), hsl(192, 69%, 52%));

    --color-secondary-24: hsl(231, 26%, 21%);
    --color-secondary-61: hsl(231, 8%, 61%);

    --color-white: hsl(0, 0%, 100%);
  }

  body {
    font-family: 'Public Sans', sans-serif;
  }
`;

export default GlobalStyles;
