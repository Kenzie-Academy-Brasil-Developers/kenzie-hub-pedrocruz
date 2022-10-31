import styled from "styled-components";

const CardList = styled.div`
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

  h3 {
    flex: 1;

    font-weight: 700;
    font-size: 10px;
  }
  p {
    font-size: var(--text-size4);
    color: var(--main-color6);
    font-weight: 100;
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
export default CardList;
