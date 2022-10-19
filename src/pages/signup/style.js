import styled from "styled-components";

export const TopDiv = styled.header`
  width: 400px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
`;

export const FormStyle = styled.div`
  width: 80%;
  max-width: 400px;
  min-height: 650px;
  height: 80%;
  background-color: var(--main-color5);
  border-radius: 8px;

  margin: 0 auto;

  h1 {
    text-align: center;
    color: white;
    font-size: var(--text-size2);
    padding: 5px 0;
  }
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--text-size4);
  }
  p {
    text-align: center;
    font-size: var(--text-size4);
    color: var(--main-color2);
  }
  form {
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin: 10px auto;
    color: white;
    gap: 5px;
  }
  label {
    font-size: var(--text-size4);
    padding: 5px 0;
  }
  div {
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin: 50px auto;
  }
  h4 {
    font-size: var(--text-size4);
    font-weight: 300;
    color: white;
    padding: 10px 0;
    text-align: center;
  }
`;
export const Input = styled.input`
  width: 100%;
  height: 30px;
  border-radius: 4px;
  border: solid 2px var(--main-color6);
  font-size: var(--text-size3);
  color: white;
  padding-left: 10px;
  background-color: var(--main-color6);
`;
export const Select = styled.select`
  width: 100%;
  height: 30px;
  border-radius: 4px;
  border: solid 2px var(--main-color6);
  font-size: var(--text-size3);
  color: white;
  padding-left: 10px;
  background-color: var(--main-color6);
`;
export const Button1 = styled.button`
  width: 100%;
  height: 40px;
  background-color: var(--main-color2);
  border: none;
  border-radius: 4px;
  margin-top: 30px;
  color: white;
`;
