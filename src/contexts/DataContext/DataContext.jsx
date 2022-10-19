import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Api from "../../services/api";

export const DataContext = createContext({});

const DataProvider = ({ children }) => {
  const [dataUser, setDataUser] = useState([]);
  const [user, setUser] = useState(false);
  const [loading, setLoading] = useState(false);
  const [techs, setTechs] = useState([]);
  const navigate = useNavigate();
  const tokenId = localStorage.getItem("TokenId");
  const token = localStorage.getItem("Token");

  const LoginSubmit = (data) => {
    Api.post("/sessions", data)
      .then((resp) => {
        window.localStorage.clear();
        localStorage.setItem("Token", resp.data.token);
        localStorage.setItem("TokenId", resp.data.user.id);
        setUser(true);
        toast.success(`Bem vindo,${resp.data.user.name}!`);
        setDataUser(resp.data.user);
        setTechs(resp.data.user.techs);
        navigate("/dashboard");
      })
      .catch((err) => {
        toast.error("algo deu errado :(");
        console.log(err);
      });
  };
  const signupSubmit = (data) => {
    Api.post(`/users`, data)
      .then((resp) => {
        setLoading(false);

        toast.success("Registro Realizado!!");
        navigate("/");
      })
      .catch((err) => {
        toast.error("Algo deu errado!");
        console.log(err);
      })
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 5000);
      });
  };

  const loadUser = async () => {
    if (token) {
      try {
        const resp = await Api.get("/profile");

        console.log(resp);
        setDataUser(resp.data);
        setTechs(resp.data.techs);
      } catch (err) {
        console.log(err);
      }
    }
  };
  useEffect(() => {
    loadUser();
  }, [techs]);

  return (
    <DataContext.Provider
      value={{
        dataUser,
        setDataUser,
        techs,
        setTechs,
        loading,
        setLoading,
        navigate,
        LoginSubmit,
        signupSubmit,
        setUser,
        user,
        token,
        tokenId,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
