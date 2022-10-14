import { Section } from "./style";

const SectionUser = ({ dataUser }) => {
  return (
    <Section>
      <div>
        <h2>Ola, {dataUser.user.name}!</h2>
        <p> {dataUser.user.course_module}.</p>
      </div>
    </Section>
  );
};
export default SectionUser;
