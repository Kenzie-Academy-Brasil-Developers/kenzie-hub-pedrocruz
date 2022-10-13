import { FormStyle, Button1, Input, TopDiv, Options, Toastx } from "./style";
import Logo from "../../assets/Logo.png";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import * as yup from "yup";
import Api from "../../services/api";
import { toast } from "react-toastify";

const SignupPages = ({ navigate }) => {
  const schema = yup.object().shape({
    name: yup.string().required("nome obrigatorio!"),
    password: yup.string().required("Senha obrigatorio!"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Senhas não combinam!"),
    email: yup.string().required("Email obrigatorio!!").email(),
    bio: yup.string().required("Fale um pouco sobre você!"),
    contact: yup.string().required("Deixe seu contato!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    Api.post(`/users`, data)
      .then((resp) => {
        toast.success("Registro Realizado!!");
        navigate("/");
      })
      .catch((err) => {
        toast.error("Algo deu errado!");
        console.log(err);
      });
  };
  console.log(errors);
  return (
    <>
      <TopDiv>
        <img src={Logo} alt="Logo" />
        <Link to="/" className="logOutButton">
          Voltar
        </Link>
      </TopDiv>

      <FormStyle>
        <h1>Crie sua conta</h1>
        <span>Rapido e grátis, vamos nessa</span>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Nome</label>
          <Input placeholder="Nome" {...register(`name`)} />
          <p>{errors.name?.message}</p>
          <label>Email</label>
          <Input placeholder="Email" {...register(`email`)} />
          <p>{errors.email?.message}</p>
          <label>Senha</label>
          <Input placeholder="Senha" {...register(`password`)} />
          <p>{errors.password?.message}</p>
          <label>Confirmar Senha</label>
          <Input
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
          <Options id="module" {...register(`course_module`)}>
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
          </Options>
          <Button1 type="submit">Entar</Button1>
        </form>
      </FormStyle>
    </>
  );
};
export default SignupPages;
