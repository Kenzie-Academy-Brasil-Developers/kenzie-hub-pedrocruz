import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext/DataContext";
import { Section } from "./style";

const SectionUser = () => {
  const { dataUser } = useContext(DataContext);
  return (
    <Section>
      <div>
        <h2>Ola, {dataUser.name}!</h2>
        <p>{dataUser.course_module}</p>
      </div>
    </Section>
  );
};
export default SectionUser;
