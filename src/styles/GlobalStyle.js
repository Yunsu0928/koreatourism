import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-family: "Helvetica", "Arial", sans-serif;
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
