import { ReactNode } from "react";
import Button1 from "./style";
interface iButtonProps {
  children: ReactNode;
}

const Button = ({ children }: iButtonProps) => {
  return <Button1 type="submit">{children}</Button1>;
};
export default Button;
