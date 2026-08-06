import { ComponentProps } from "react";

type Props = {
  onChange: (value: string) => void;
} & Omit<ComponentProps<"input">, "onChange">;

const Textfield2 = ({ onChange, ...rest }: Props) => {
  return <input onChange={(e) => onChange(e.target.value)} {...rest} />;
};

export default Textfield2;
