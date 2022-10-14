import { Main } from "./style";
import Logo from "../../assets/Logo.png";

import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext/DataContext";
import HeaderDashboard from "../../components/mainHeader";
import SectionUser from "../../components/sectionUser";

const DashboardPage = () => {
  const { user, dataUser } = useContext(DataContext);
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
