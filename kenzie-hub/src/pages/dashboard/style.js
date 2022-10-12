import styled from "styled-components";

export const noUser = styled.span``;

export const Header = styled.header`
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
  }
  p {
    font-size: var(--text-size4);
    color: var(--main-color6);
    font-weight: 100;
  }
`;
export const Section = styled(Header)`
  height: 200px;
  color: white;
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
