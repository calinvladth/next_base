import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --font: 'Raleway', sans-serif;
    --font-light: 300;
    --font-regular: 400;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    //border: 1px solid red;
  }
  
  html {
    font-size: 62.5%;
    position: fixed;
    height: 100%;
    overflow: hidden;
  }

  body {
    font-family: var(--font);
    font-weight: var(--font-regular);
    color: ${({theme}) => theme.colors.black};
    background-color: ${({theme}) => theme.colors.light};

    width: 100vw;
    height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
  }

  p, span, a, li, select {
    font-family: var(--font);
    font-weight: var(--font-light);
    font-size: 1.6rem;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-size: 2rem;
    font-family: var(--font);
    font-weight: var(--font-regular);
    color: ${({theme}) => theme.colors.black};
  }

  a {
    text-decoration: none;
    color: inherit;

    &:hover {
      color: ${({theme}) => theme.colors.black}
    }
  }

  button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }
  
  ul {
    list-style: inside;
  }
`;

export default GlobalStyle;
