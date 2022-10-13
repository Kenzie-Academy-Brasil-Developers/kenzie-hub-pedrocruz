import { FormStyle, Button1, Input } from "./style";
import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Api from "../../services/api";
import { toast } from "react-toastify";

const LoginPage = ({ navigate, setDataUser, setUser }) => {
  const schema = yup.object().shape({
    password: yup.string().required("Senha obrigatorio!"),
    email: yup.string().required("Email obrigatorio!!").email(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    Api.post(`/sessions`, data)
      .then((resp) => {
        window.localStorage.clear();
        window.localStorage.setItem("authToken", resp.data.token);
        window.localStorage.setItem("authTokenId", resp.data.user.id);
        setUser(true);
        toast.success(`Bem vindo,${resp.data.user.name}!`);
        setDataUser(resp.data);
        navigate("/dashboard");
      })
      .catch((err) => {
        toast.error("algo deu errado :(");
        console.log(err);
      });
  };
  console.log(errors);
  return (
    <>
      <img src={Logo} alt="Logo" className="img" />
      <FormStyle>
        <h1>Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Email</label>
          <Input placeholder="email" {...register(`email`)} />
          <p>{errors.email?.message}</p>
          <label>Senha</label>
          <Input
            type="password"
            placeholder="Senha"
            {...register(`password`)}
          />
          <p>{errors.password?.message}</p>
          <Button1>Entar</Button1>
        </form>
        <div>
          <h4>Ainda não possui uma conta ?</h4>
          <Link className="linkButton" to="/signup">
            Cadastre-se
          </Link>
        </div>
      </FormStyle>
    </>
  );
};
export default LoginPage;
