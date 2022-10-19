import { FormStyle, Input } from "./style";
import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext/DataContext";
import Schema from "./validator";
import Button from "../../components/buttonLoginRegister";
import PasswordInput from "../../components/passwordVisibilte";

const LoginPage = () => {
  const { LoginSubmit } = useContext(DataContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(Schema),
  });

  return (
    <motion.div
      animate={{ opacity: [0, 1], x: [-10, 4, 0], y: [-10, 4, 0] }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ ease: "easeInOut", duration: 2 }}
    >
      <img src={Logo} alt="Logo" className="img" />
      <FormStyle>
        <h1>Login</h1>
        <form onSubmit={handleSubmit(LoginSubmit)}>
          <label>Email</label>
          <Input placeholder="email" {...register(`email`)} />
          <p>{errors.email?.message}</p>
          <label>Senha</label>
          <PasswordInput placeholder="Senha" register={register} />
          <p>{errors.password?.message}</p>
          <Button>Entar</Button>
        </form>
        <div>
          <h4>Ainda não possui uma conta ?</h4>
          <Link className="linkButton" to="/signup">
            Cadastre-se
          </Link>
        </div>
      </FormStyle>
    </motion.div>
  );
};
export default LoginPage;
