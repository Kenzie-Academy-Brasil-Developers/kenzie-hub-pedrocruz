import { FormStyle, Input, TopDiv, Select } from "./style";
import Logo from "../../assets/Logo.png";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useContext } from "react";

import Button from "../../components/buttonLoginRegister";
import { DataContext } from "../../contexts/DataContext/DataContext";
import Schema from "../../validators/signup/signup";

const SignupPages = () => {
  const { signupSubmit } = useContext(DataContext);
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
      exit={{ opacity: 0, x: -10 }}
      transition={{ ease: "easeInOut", duration: 1 }}
    >
      <TopDiv>
        <img src={Logo} alt="Logo" />
        <Link to="/" className="logOutButton">
          Voltar
        </Link>
      </TopDiv>

      <FormStyle>
        <h1>Crie sua conta</h1>
        <span>Rapido e grátis, vamos nessa</span>
        <form onSubmit={handleSubmit(signupSubmit)}>
          <label>Nome</label>
          <Input placeholder="Nome" {...register(`name`)} />
          <p>{errors.name?.message}</p>
          <label>Email</label>
          <Input placeholder="Email" {...register(`email`)} />
          <p>{errors.email?.message}</p>
          <label>Senha</label>
          <Input
            placeholder="Senha"
            type="password"
            {...register(`password`)}
          />
          <p>{errors.password?.message}</p>
          <label>Confirmar Senha</label>
          <Input
            type="password"
            placeholder="Confirmar Senha"
            {...register(`confirmPassword`)}
          />
          <p>{errors.confirmPassword?.message}</p>
          <label>Bio</label>
          <Input
            placeholder="Faça uma pequena discrição!"
            {...register(`bio`)}
          />
          <p>{errors.bio?.message}</p>
          <label>Contato</label>
          <Input placeholder="ex:(99)99999999" {...register(`contact`)} />
          <p>{errors.contact?.message}</p>
          <label>Selecionar módulo</label>
          <Select id="module" {...register(`course_module`)}>
            <option value="Primeiro módulo (Introdução ao Frontend)">
              Primeiro módulo
            </option>
            <option value="Segundo módulo (Frontend Avançado)">
              Segundo módulo
            </option>
            <option value="Terceiro módulo (Introdução ao Backend)">
              Terceiro módulo
            </option>
            <option value="Quarto módulo (Backend Avançado)">
              Quarto módulo
            </option>
          </Select>
          <Button type="submit">Entar</Button>
        </form>
      </FormStyle>
    </motion.div>
  );
};
export default SignupPages;
