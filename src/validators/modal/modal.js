import * as yup from "yup";

const SchemaModal = yup.object().shape({
  title: yup.string().required("Tecnologia é um campo obrigatorio!"),
  status: yup.string().required("Nível é um campo obrigatorio"),
});
export default SchemaModal;
