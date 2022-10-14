import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const DataContext = createContext({});

const DataProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  const [dataUser, setDataUser] = useState([]);
  const navigate = useNavigate();
  return (
    <DataContext.Provider
      value={{ user, setUser, dataUser, setDataUser, navigate }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
