import styled from "styled-components";

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
