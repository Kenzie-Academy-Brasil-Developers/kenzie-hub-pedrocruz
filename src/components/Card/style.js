import styled from "styled-components";

export const TechList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 8px;
  gap: 16px;
  background-color: var(--main-color6);
  height: 48px;
  width: 100%;
  border-radius: 4px;

  li {
    border-radius: 4px;
    padding: 8px;
    background-color: var(--main-color4);
    width: 95%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:hover {
      background-color: var(--main-color5);
    }
  }
  @media (max-width: 630px) {
    width: 290px;
  }
  h3 {
    flex: 1;

    font-weight: 700;
    font-size: 10px;
  }
  p {
    font-size: 0.5rem;
    font-weight: 400;
    font-size: 12px;
  }
  button {
    border: none;
    background-color: transparent;
  }
  svg {
    fill: white;
    width: 15px;
    height: 15px;
    cursor: pointer;
  }
`;
