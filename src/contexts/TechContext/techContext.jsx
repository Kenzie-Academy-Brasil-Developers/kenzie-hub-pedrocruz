import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { DataContext } from "../DataContext/DataContext";
import Api from "../../services/api";

export const TechContext = createContext({});

const TechProvider = ({ children }) => {
  const { techs, setTechs, token, tokenId, user, loading } =
    useContext(DataContext);
  const [openModal, setOpenModal] = useState(false);
  const [showModalUpdate, setShowModalUpdate] = useState(false);
  const [techSelected, setTechSelected] = useState({});

  /* função para alterar propriedades */
  const getTech = (tech) => {
    setShowModalUpdate(true);
    setTechSelected(tech);
  };

  const handleModal = () => {
    if (openModal === false) {
      setOpenModal(true);
    }
    if (openModal === true) {
      setOpenModal(false);
    }
  };

  const addTechs = async (data) => {
    console.log(data);
    try {
      const resp = await Api.post("users/techs", data);
      setTechs([...techs, resp.data]);
      setOpenModal(false);
      toast.success("Tecnologia adicionada!");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const deleteTechs = async (id) => {
    const filtred = techs.filter((tech) => tech.id != id);

    try {
      await Api.delete(`/users/techs/${id}`);
      setTechs(filtred);
      toast.success("Tecnologia deletada com sucesso");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <TechContext.Provider
      value={{
        tokenId,
        token,
        techs,
        setTechs,
        handleModal,
        getTech,
        techSelected,
        addTechs,
        deleteTechs,
        openModal,
        setOpenModal,
        showModalUpdate,
        setShowModalUpdate,
        user,
        loading,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};

export default TechProvider;
