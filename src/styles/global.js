import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root{
        --main-color:#FF577F;
        --main-color2:#FF427F;
        --main-color3:#59323F;
        --main-color4:#121214;
        --main-color5:#212529;
        --main-color6:#343B41;
        --main-color7:#868E96;

        --positive-color:#3FE864;
        --negative-color:#E83F5B;

        --color-background:#121214;

        --text-size:26px;
        --main-wiigth:bold;
        
        --text-size2:22px;
       

        --text-size3:18px;
        

        --text-size4:14px;
        

        --text-size5:16px;
        --main-wiigth2:regular;
    }
    *{
        list-style: none;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;

    }
    body,html{
    width: 100vw;
    height: 100vh;
  }
  body {
    background: var(--color-background);
    color: var(--color-text);
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }
  body, input, button, textarea {
    font-family: 'Roboto';
    font-size: 1.6rem;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight:var(--main-wiigth);
  }
  button {
    cursor: pointer;
  }
  .btn {
    width: 90px;
    font-size: 0.8rem;
    border-radius: 8px;
    border: none;
    background-color: var(--main-color);
    color: var(--main-color3);
    height: 30px;
  }
  .eye {
    background-color: transparent;
    display: flex;
    border: none;
    cursor: pointer;
  }
  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: var(--main-color4);
    margin: 1rem;
    border-radius: 1.6rem;
  }
 
  ::-webkit-scrollbar-thumb {
    background: var(--main-color2);
    border-radius: 1.6rem;
  }
 
  ::-webkit-scrollbar-thumb:hover {
    background: var(--main-color);
  }
  .img {
    display: flex;
    margin: 0 auto;
    margin-top: 100px;
  }
  

  .linkButton{
    text-decoration: none;
    align-items: center;
    display: flex;
    justify-content: center;
  width: 100%;
  max-width: 350px;
  height: 40px;
  background-color: var(--main-color7);
  border: none;
  border-radius: 4px;
  margin-top: 10px;
  color: white;
  }
  .logOutButton{
    text-decoration: none;
    align-items: center;
    display: flex;
    justify-content: center;
    width: 60px;
    height: 40px;
    background-color: var(--main-color5);
    color:white;
    font-size: var(--text-size3);
    border-radius: 4px;
  }
  
  
`;
