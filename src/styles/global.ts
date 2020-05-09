import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin:0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  *:focus{
    outline: 0;
  }
  html,body,#root{
    height:100%;
  }
  body{
    -webkit-font-smoothing-:antialiased;
    background-color: #f0f0f0;
  }
  body,input,button,textarea,p,strong{
    font-family: 'PT Sans','Roboto', sans-serif
  }
  a{
    text-decoration: none
  }
  ul{
    list-style: none
  }
  button,a{
    cursor: pointer
  }
`;
