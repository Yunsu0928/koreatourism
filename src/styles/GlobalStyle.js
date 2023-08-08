import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  @font-face {
    font-family: 'GmarketSansMedium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

  body {
    /* font-family: "Helvetica", "Arial", sans-serif; */
    line-height: 1.5;
  }

  h1{
    font-size: 60px;
	  color: #5F5E5E;
  }

  h2{
    font-size: 40px;
  }
  
`;

export default GlobalStyle;
