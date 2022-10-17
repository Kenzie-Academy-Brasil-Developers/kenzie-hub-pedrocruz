import { Main } from "./style";
import Logo from "../../assets/Logo.png";

import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../contexts/DataContext/DataContext";
import HeaderDashboard from "../../components/mainHeader";
import SectionUser from "../../components/sectionUser";
import Api from "../../services/api";
const DashboardPage = () => {
  const { user, dataUser, setUser, setDataUser, navigate } =
    useContext(DataContext);

  const tokenId = localStorage.getItem("authTokenId");
  const { techList, setTechList } = useState([]);
  console.log(tokenId);
  useEffect(() => {
    conectUser();
  }, []);
  const conectUser = async () => {
    if (tokenId) {
      try {
        const response = await Api.get(`/users/${tokenId}}`);

        setTechList(response.data);
        setUser(true);
        setDataUser(response.data);
      } catch (error) {
        console.log(error.message);
      }
    } else {
      setUser(false);
    }
  };

  useEffect(() => {
    if (!tokenId) {
      navigate("/");
    }
  }, [tokenId]);

  return (
    <>
      <HeaderDashboard Logo={Logo} />

      {!user ? (
        <Main>
          <h3>Sem usuario</h3>
          <p>Realize um cadastro, o Login</p>
        </Main>
      ) : (
        <>
          <SectionUser dataUser={dataUser} />
          <Main>
            <h3>Que pena! Estamos em desenvolvimento :(</h3>
            <p>
              Nossa aplicação está em desenvolvimento, em breve teremos
              novidades
            </p>
          </Main>
        </>
      )}
    </>
  );
};
export default DashboardPage;
