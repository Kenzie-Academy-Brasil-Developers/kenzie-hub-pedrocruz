import StyleGlobal from "./styles/global";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import LoginPage from "./pages/login";
import SignupPages from "./pages/signup";
import DashboardPage from "./pages/dashboard";
import { useState } from "react";
import MainRoutes from "./Routes";

function App() {
  const navigate = useNavigate();
  const [dataUser, setDataUser] = useState([]);
  const [user, setUser] = useState(false);
  return (
    <>
      <StyleGlobal />

      <MainRoutes />
      <ToastContainer />
    </>
  );
}

export default App;
