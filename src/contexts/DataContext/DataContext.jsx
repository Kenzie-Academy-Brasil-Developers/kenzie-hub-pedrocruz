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
    setLoading(true);
    Api.post("/sessions", data)
      .then((resp) => {
        window.localStorage.clear();
        localStorage.setItem("Token", resp.data.token);
        localStorage.setItem("TokenId", resp.data.user.id);
        setUser(true);
        navigate("/dashboard");
        toast.success(`Bem vindo,${resp.data.user.name}!`);
        setDataUser(resp.data.user);
        setTechs(resp.data.user.techs);
      })
      .catch((err) => {
        toast.error("algo deu errado :(");
        console.log(err);
      })
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      });
  };
  const signupSubmit = (data) => {
    setLoading(true);
    Api.post(`/users`, data)
      .then((resp) => {
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
        }, 2000);
      });
  };

  useEffect(() => {
    async function loadUser() {
      if (token) {
        try {
          const { data } = await Api.get("profile");
          setDataUser(data);
          setUser(true);
          setTechs(data.techs);
        } catch (err) {
          console.log(err);
        }
      }
      setLoading(false);
    }
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
