import { Link } from "react-router-dom";
import { Header } from "./style";

const HeaderDashboard = ({ Logo }) => {
  return (
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
  );
};
export default HeaderDashboard;
