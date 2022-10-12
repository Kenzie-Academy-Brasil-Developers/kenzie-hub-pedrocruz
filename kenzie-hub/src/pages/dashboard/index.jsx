import { Header, Main, Section } from "./style";
import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";

const DashboardPage = ({ dataUser, user }) => {
  console.log(dataUser);
  return (
    <>
      <Header>
        <div>
          <img src={Logo} alt="" />
          <Link
            className="logOutButton"
            to="/"
            onClick={() => {
              localStorage.clear();
            }}
          >
            Sair
          </Link>
        </div>
      </Header>

      {!user ? (
        <Main>
          <h3>Sem usuario</h3>
          <p>Realize um cadastro, o Login</p>
        </Main>
      ) : (
        <>
          <Section>
            <div>
              <h2>Ola, {dataUser.user.name}!</h2>
              <p> {dataUser.user.course_module}.</p>
            </div>
          </Section>
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
