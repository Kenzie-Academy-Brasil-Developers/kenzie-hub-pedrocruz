import styled from "styled-components";

const AddSection = styled.section`
  width: 100%;
  display: flex;

  justify-content: space-between;

  align-items: center;

  margin: 0 auto;
  h2 {
    font-size: var(--text-size);
  }
  button {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;
    color: white;
  }
`;
export default AddSection;
