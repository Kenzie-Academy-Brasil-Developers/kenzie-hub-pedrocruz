import * as yup from "yup";

const Schema = yup.object().shape({
  name: yup.string().required(`Nome é um campo obrigatório`),
  email: yup
    .string()
    .required(`E-mail é um campo obrigatório`)
    .email(`Digite um email válido`),
  password: yup
    .string()
    .required(`Insira uma senha`)
    .matches(/[a-z]/, `Deve conter ao menos 1 letra minúscula`)
    .matches(/[A-Z]/, `Deve conter ao menos 1 letra maiúscula`)
    .matches(/[0-9]/, `Deve conter ao menos 1 número`)
    .matches(/(\W)|_/, `Deve conter ao menos 1 caracatere especial(@#$%...)`)
    .matches(/.{8,}/, `Deve conter no ao menos 8 caracateres`),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Senhas não combinam!"),
  contact: yup.string().required(`Contato é um campo obrigatório`),
  course_module: yup.string().required(`Selecione um módulo`),
});
export default Schema;
