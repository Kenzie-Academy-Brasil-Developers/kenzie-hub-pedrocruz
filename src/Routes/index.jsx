import { Navigate, Route, Routes } from "react-router-dom";
import DashboardPage from "../pages/dashboard";
import LoginPage from "../pages/login";
import SignupPages from "../pages/signup";
import { AnimatePresence } from "framer-motion";

const MainRoutes = () => {
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<LoginPage />} />

        <Route path="/signup" element={<SignupPages />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </AnimatePresence>
  );
};
export default MainRoutes;
