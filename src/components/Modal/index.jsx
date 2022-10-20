import { RegisterTech } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import Button from "../buttonLoginRegister";

import { useContext } from "react";
import { TechContext } from "../../contexts/TechContext/techContext";
import SchemaModal from "../../validators/modal/modal";

const Modal = ({ handleModal }) => {
  const { addTechs } = useContext(TechContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SchemaModal),
  });

  return (
    <>
      <RegisterTech>
        <main>
          <div>
            <motion.h2>Cadastrar Tecnologia</motion.h2>
            <button onClick={handleModal}>X</button>
          </div>
          <form onSubmit={handleSubmit(addTechs)}>
            <label htmlFor="">Tecnologia</label>
            <input
              type="text"
              placeholder="Digite a tecnologia"
              {...register("title")}
            />
            <label>Selecionar Nível</label>
            <select id="status" {...register("status")}>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
            <p>{errors.status?.message}</p>

            <Button type="submit">Cadastrar</Button>
          </form>
        </main>
      </RegisterTech>
    </>
  );
};
export default Modal;
