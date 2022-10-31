import { RegisterTech } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import Button from "../buttonLoginRegister";

import { useContext } from "react";
import { iEditTech, TechContext } from "../../contexts/TechContext/techContext";
import { toast } from "react-toastify";
import Api from "../../services/api";
import { iTech } from "../../contexts/DataContext/DataContext";

interface iRegisterModal {
  title: string;
  status: string;
}

const ModalUpdate = () => {
  const { techSelected, handleModalUpdate } = useContext(TechContext);

  const { register, handleSubmit } = useForm<iRegisterModal>({
    defaultValues: { title: techSelected.title, status: techSelected.status },
  });

  const editTechs = async (tech: iEditTech) => {
    try {
      await Api.put(`users/techs/${techSelected.id}`, tech);
      handleModalUpdate();

      toast.success("Suas habilidades foram atualizadas!");
    } catch (error) {
      toast.error(error.name);
    }
  };
  return (
    <>
      <RegisterTech>
        <main>
          <div>
            <h2> Editar Tecnologia</h2>
            <button onClick={handleModalUpdate}>X</button>
          </div>
          <form onSubmit={handleSubmit(editTechs)}>
            <label htmlFor="">Tecnologia</label>
            <input
              type="text"
              placeholder="Digite a tecnologia"
              {...register("title")}
            />
            <label>Editar Nível</label>
            <select id="status" {...register("status")}>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>

            <Button>Cadastrar</Button>
          </form>
        </main>
      </RegisterTech>
    </>
  );
};
export default ModalUpdate;
