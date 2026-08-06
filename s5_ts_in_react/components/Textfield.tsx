import { ComponentProps } from "react";

type Props = ComponentProps<"input">;

const Textfield = ({ className, ...rest }: Props) => {
  return <input className={className} {...rest} />;
};

export default Textfield;
