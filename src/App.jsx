import Global from "./styles/global";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import LoginPage from "./pages/login";
import SignupPages from "./pages/signup";
import DashboardPage from "./pages/dashboard";
import { useState } from "react";

function App() {
  const navigate = useNavigate();
  const [dataUser, setDataUser] = useState([]);
  const [user, setUser] = useState(false);
  return (
    <>
      <Global />

      <Routes>
        <Route
          path="/"
          element={
            <LoginPage
              setDataUser={setDataUser}
              navigate={navigate}
              setUser={setUser}
            />
          }
        />

        <Route path="/signup" element={<SignupPages navigate={navigate} />} />
        <Route
          path="/dashboard"
          element={
            <DashboardPage
              user={user}
              navigate={navigate}
              dataUser={dataUser}
            />
          }
        />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
