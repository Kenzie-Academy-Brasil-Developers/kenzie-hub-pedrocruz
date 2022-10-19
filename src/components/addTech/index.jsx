import AddSection from "./style";

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
        +
      </button>
    </AddSection>
  );
};
export default AddTech;
