import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, button {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    margin: 0 auto;

    background-color: #CAD6E3;
    padding: 50px 0px;

    font: 16px "Poppins", Arial, sans-serif;

    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }

  ul {
    list-style: none;
  }
`