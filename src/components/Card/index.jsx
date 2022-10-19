import { TechList } from "./style";
import { FaTrash } from "react-icons/fa";
import { useContext } from "react";
import { TechContext } from "../../contexts/TechContext/techContext";

const Card = ({ techName, techLevel, id }) => {
  const { deleteTechs, getTech } = useContext(TechContext);

  return (
    <TechList>
      <li>
        <h3>{techName}</h3>

        <p>{techLevel}</p>
        <button onClick={() => deleteTechs(id)}>
          <FaTrash />
        </button>
      </li>
    </TechList>
  );
};
export default Card;
