import styled from "styled-components";

export const RegisterTech = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  position: fixed;
  width: 100%;
  height: 100%;

  h2 {
    color: white;
    font-size: var(--text-size4);
  }
  background-color: rgba(0, 0, 0, 0.4);
  main {
    width: 300px;
    height: 350px;
    background-color: var(--main-color5);
    border-radius: 4px;
    gap: 16px;

    display: flex;
    flex-direction: column;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 80%;
    height: 100%;
    margin: 15px auto;
  }
  label {
    color: white;
    font-size: var(--text-size3);
  }
  input {
    height: 40px;

    font-size: var(--text-size4);
    background-color: var(--main-color4);
    border-radius: 4px;
    padding: 4px;
    color: white;
  }

  select {
    height: 48px;
    color: var(--main-color7);
    background-color: var(--main-color4);
    border-radius: 4px;
  }
  select:focus {
    outline: none;
  }
  p {
    color: var(--main-color);
    font-size: 8px;
  }
  .register {
    color: var(--grey-0);
    background-color: var(--primary);
    border: none;
    border-radius: 4px;
    height: 48px;
    &:hover {
      background-color: var(--focus);
    }
  }

  div {
    box-sizing: border-box;
    border-radius: 4px 4px 0 0;
    padding: 8px;
    display: flex;
    justify-content: space-between;
    height: 36px;
    width: 100%;
    align-items: center;
    background-color: var(--grey-2);
    color: var(--grey-0);
    font-size: 14px;
    font-weight: 700;
    button {
      background-color: transparent;
      color: white;
      border: none;
      &:hover {
        color: var(--main-color);
      }
    }
  }
`;
