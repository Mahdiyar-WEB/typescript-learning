import { ComponentProps } from "react";

type Props = {
  variant: "primary" | "secondary";
  children: string;
} & Omit<ComponentProps<"button">, "children">;

const ButtonOverrided = ({ variant, children, className, ...rest }: Props) => {
  return (
    <button
      className={`rounded-md ${className} ${variant === "primary" ? "btn__primary" : "btn__secondary"}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default ButtonOverrided;
