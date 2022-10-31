import { Section } from "./style";
interface iSectionUserProps {
  userName: string;
  userModule: string;
}
const SectionUser = ({ userName, userModule }: iSectionUserProps) => {
  return (
    <Section>
      <div>
        <h2>Ola, {userName}!</h2>
        <p>{userModule}</p>
      </div>
    </Section>
  );
};
export default SectionUser;
