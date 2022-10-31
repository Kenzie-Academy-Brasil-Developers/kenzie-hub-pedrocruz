import StyleGlobal from "./styles/global";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import MainRoutes from "./Routes";

function App() {
  return (
    <>
      <StyleGlobal />

      <MainRoutes />
      <ToastContainer />
    </>
  );
}

export default App;
