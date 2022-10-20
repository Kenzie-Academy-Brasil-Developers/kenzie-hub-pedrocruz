import AddSection from "./style";
import { AiOutlinePlusCircle } from "react-icons/ai";

const AddTech = ({ handleModal }) => {
  return (
    <AddSection>
      <h2>Tecnologias</h2>
      <button
        type="button"
        onClick={() => {
          handleModal();
        }}
      >
        <AiOutlinePlusCircle />
      </button>
    </AddSection>
  );
};
export default AddTech;
