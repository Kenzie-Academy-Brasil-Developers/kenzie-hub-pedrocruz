import * as yup from "yup";
const Schema = yup.object().shape({
  password: yup.string().required("Senha obrigatorio!"),
  email: yup.string().required("Email obrigatorio!!").email(),
});
export default Schema;
