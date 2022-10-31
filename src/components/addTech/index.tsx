import AddSection from "./style";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useContext } from "react";
import { TechContext } from "../../contexts/TechContext/techContext";

const AddTech = () => {
  const { handleModal } = useContext(TechContext);
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
