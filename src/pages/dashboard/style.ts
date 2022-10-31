import styled from "styled-components";

export const Main = styled.main`
  flex-direction: row;
  color: white;
  width: 60%;
  margin: 20px auto;

  p {
    font-size: var(--text-size4);
    padding: 20px 0;
  }
`;
export const Container = styled.section`
  flex-direction: row;
  color: white;
  width: 60%;
  margin: 20px auto;
`;
export const UlMain = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  background: var(--grey-2);
  border-radius: 0.15rem;
  padding: 15px;
  margin-top: 25px;
  width: 80%;
  height: 350px;
`;
