import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";

import { Location, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Api from "../../services/api";

export interface iDataProviderProps {
  children: React.ReactNode;
}

export interface iLogin {
  email: string;
  password: string;
  /* token: string; */
}

export interface iSignup extends iLogin {
  name: string;
  confirmPassword: string;
  bio: string;
  contact: number | string;
  course_module: string;
  token: string;
}
export interface iTech {
  id: string;
  title: string;
  status: string;
  created_at: Date;
  updated_at: Date;
}
interface iUser {
  id: string;
  name: string;
  email: string;
  course_module: string;
  bio: string;
  contact: string;
  created_at: string;
  updated_at: string;
  techs: iTech[];
  avatar_url?: string;
}

interface iResponseLogin {
  user: iUser;
  token: string;
}

interface iProviderData {
  user: boolean;
  setUser: Dispatch<SetStateAction<boolean>>;
  loading: boolean;
  setLoading: any;
  signupSubmit: (data: iSignup) => void;
  LoginSubmit: (data: iLogin) => void;

  techs: iTech[];
  setTechs: React.Dispatch<React.SetStateAction<iTech[]>>;
  userName: string;
  userModule: string;
}
interface iLocationState extends Location {
  state: { from: { pathname: string } };
}

export const DataContext = createContext<iProviderData>({} as iProviderData);

const DataProvider = ({ children }: iDataProviderProps) => {
  const [userName, setUserName] = useState<string>("");
  const [userModule, setUserModule] = useState<string>("");

  const [user, setUser] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [techs, setTechs] = useState<iTech[]>([]);
  const navigate = useNavigate();
  const location = useLocation() as iLocationState;
  const tokenId = localStorage.getItem("TokenId");

  const LoginSubmit = async (data: iLogin) => {
    setLoading(true);
    try {
      const resp = await Api.post<iResponseLogin>("sessions", data);
      const { user: dataUser, token } = resp.data;
      Api.defaults.headers.common.authorization = `Bearer ${token}`;

      setUserName(dataUser.name);
      setUserModule(dataUser.course_module);

      window.localStorage.clear();
      localStorage.setItem("Token", token);
      localStorage.setItem("TokenId", dataUser.id);

      setUser(true);
      toast.success(`Bem vindo,${dataUser.name}!`);

      navigate("/dashboard", { replace: true });
      setLoading(false);
    } catch (error) {
      toast.error("algo deu errado :(");
      console.log(error);
    }

    /*  .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }); */
  };
  const signupSubmit = async (data: iSignup) => {
    setLoading(true);
    try {
      Api.post(`/users`, data).then((resp) => {
        toast.success("Registro Realizado!!");
        navigate("/");
      });
    } catch (error) {
      toast.error("Algo deu errado!");
    }

    /*  .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }); */
  };

  useEffect(() => {
    const getUser = async () => {
      const token = localStorage.getItem("Token");
      if (location.pathname === "/signup") {
        return;
      }
      if (!token) {
        navigate("/");
      } else {
        try {
          Api.defaults.headers.common.authorization = `Bearer ${token}`;
          const { data } = await Api.get(`/profile`);

          setUserName(data.name);
          setUserModule(data.course_module);
          setUser(true);
          setTechs(data.techs);
          navigate("/dashboard");
        } catch (error) {
          localStorage.clear();
          navigate("/");
        }
      }
      setLoading(false);
    };

    getUser();
  }, [techs, userName]);

  // tech context

  return (
    <DataContext.Provider
      value={{
        userName,
        userModule,
        loading,
        setLoading,
        setTechs,
        techs,
        setUser,
        signupSubmit,
        LoginSubmit,
        user,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
