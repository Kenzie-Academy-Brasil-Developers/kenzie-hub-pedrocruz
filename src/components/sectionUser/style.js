import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  height: 100px;
  border-bottom: solid 1px var(--main-color7);

  div {
    width: 60%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
  }
  h2 {
    font-size: var(--text-size2);
  }
  p {
    font-size: var(--text-size4);
    color: var(--main-color6);
    font-weight: 100;
  }
  @media (max-width: 700px) {
    div {
      display: flex;
      flex-direction: row;
      justify-content: center;
      flex-wrap: wrap;
      text-align: center;
    }
  }
`;
