import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { toast } from "react-toastify";
import { DataContext, iTech } from "../DataContext/DataContext";
import Api from "../../services/api";

interface iTechProviderChildren {
  children: ReactNode;
}

export interface iEditTech {
  title: string;
  status: string;
  id: string;
}

export interface iTechProvider {
  //techs: iTech[];
  //setTechs: Dispatch<SetStateAction<iTech[]>>;

  addTechs: (data: iEditTech) => Promise<void>;

  //deleteTechs: (techId: string) => Promise<void>;
  handleModal: () => void;
  handleModalUpdate: () => void;
  chosenTech: (techs: iTech) => void;
  modalUpdate: boolean;
  //setTechSelected: Dispatch<SetStateAction<iEditTech>>;
  techSelected?: iEditTech;
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;

  /*setLoading: Dispatch<SetStateAction<boolean>>; */
  /*loading: boolean;
  user: boolean; */
}

export const TechContext = createContext<iTechProvider>({} as iTechProvider);

const TechProvider = ({ children }: iTechProviderChildren) => {
  const { setTechs, setLoading } = useContext(DataContext);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [modalUpdate, setModalUpdate] = useState<boolean>(false);
  const [techSelected, setTechSelected] = useState<iTech>();

  /* função para alterar propriedades */
  const chosenTech = (techs: iTech) => {
    handleModalUpdate();
    setTechSelected(techs);
  };

  const handleModalUpdate = () => {
    if (modalUpdate === false) {
      setModalUpdate(true);
    }
    if (modalUpdate === true) {
      setModalUpdate(false);
    }
  };

  const handleModal = () => {
    if (openModal === false) {
      setOpenModal(true);
    }
    if (openModal === true) {
      setOpenModal(false);
    }
  };

  const addTechs = async (data: iEditTech) => {
    setLoading(true);
    try {
      const resp = await Api.post("users/techs", data);
      setTechs((techs) => [...techs, resp.data]);

      setOpenModal(false);

      console.log(resp);

      toast.success("Tecnologia adicionada!");
      setTimeout(() => {
        setLoading(false);
      }, 500);
    } catch (error) {
      console.log(error);

      setLoading(false);
    }
  };

  return (
    <TechContext.Provider
      value={{
        handleModal,
        handleModalUpdate,
        chosenTech,
        modalUpdate,
        techSelected,
        addTechs,
        openModal,
        setOpenModal,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};

export default TechProvider;
/* handleModal,
        handleModalUpdate,
        chosenTech,
        techSelected,
        addTechs,
        openModal,
        setOpenModal, */
