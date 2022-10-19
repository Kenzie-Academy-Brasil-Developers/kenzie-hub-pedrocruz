import { Container, UlMain } from "./style";
import Logo from "../../assets/Logo.png";
import { motion } from "framer-motion";
import { useContext, useEffect } from "react";
import HeaderDashboard from "../../components/mainHeader";
import SectionUser from "../../components/sectionUser";

import Card from "../../components/Card";
import Modal from "../../components/Modal";
import AddTech from "../../components/addTech";
import { TechContext } from "../../contexts/TechContext/techContext";
import LoadingPage from "../../components/Loading";
import { Navigate } from "react-router-dom";

const DashboardPage = () => {
  const {
    dataUser,
    handleModal,
    openModal,
    loading,
    techs,
    token,
    user,
    showModalUpdate,
  } = useContext(TechContext);
  /*   if (loading) {
    return <LoadingPage />;
  } */

  return user ? (
    <motion.div
      animate={{ opacity: [0, 1], x: [-10, 4, 0], y: [-10, 4, 0] }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ ease: "easeInOut", duration: 2 }}
    >
      {openModal && <Modal handleModal={handleModal} />}
      <HeaderDashboard Logo={Logo} />
      <>
        <SectionUser dataUser={dataUser} />
        <Container>
          <AddTech handleModal={handleModal} />

          {techs.map((tech) => (
            <Card
              key={tech.id}
              techName={tech.title}
              techLevel={tech.status}
              id={tech.id}
            />
          ))}
        </Container>
      </>
    </motion.div>
  ) : (
    <Navigate to="/" replace />
  );
};
export default DashboardPage;
