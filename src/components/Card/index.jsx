import CardList from "./style";
import { FaTrash } from "react-icons/fa";
import { AiOutlineEdit } from "react-icons/ai";
import { useContext } from "react";
import { TechContext } from "../../contexts/TechContext/techContext";
import { motion } from "framer-motion";

const Card = ({ techName, techLevel, id, tech }) => {
  const { deleteTechs, chosenTech } = useContext(TechContext);

  return (
    <motion.div
      animate={{ opacity: [0, 1], x: [-10, 4, 0], y: [-10, 4, 0] }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ ease: "easeInOut", duration: 0.5 }}
    >
      <CardList>
        <li>
          <h3>{techName}</h3>

          <p>{techLevel}</p>
          <button onClick={() => deleteTechs(id)}>
            <FaTrash />
          </button>
          <button onClick={() => chosenTech(tech)}>
            <AiOutlineEdit />
          </button>
        </li>
      </CardList>
    </motion.div>
  );
};
export default Card;
