import CardList from "./style";
import { FaTrash } from "react-icons/fa";
import { AiOutlineEdit } from "react-icons/ai";
import { useContext } from "react";
import { TechContext } from "../../contexts/TechContext/techContext";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import Api from "../../services/api";
import { DataContext, iTech } from "../../contexts/DataContext/DataContext";

interface iCardProps {
  techName: string;
  techLevel: string;
  tech: iTech;
  id: string | number;
}

const Card = ({ techName, techLevel, tech, id }: iCardProps) => {
  const { chosenTech } = useContext(TechContext);
  const { setTechs } = useContext(DataContext);

  const deleteTechs = async (techId: string | number) => {
    const token = localStorage.getItem("Token");
    try {
      Api.defaults.headers.common.authorization = `Bearer ${token}`;
      await Api.delete(`/users/techs/${techId}`);
      setTechs((techs) => techs.filter(({ id }) => id !== techId));
      toast.success("Tecnologia deletada com sucesso");
    } catch (err) {
      console.log(err);
    }
  };

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
