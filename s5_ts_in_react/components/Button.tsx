import { ComponentProps } from "react";

type Props = {
  variant: "primary" | "secondary";
} & ComponentProps<"button">;

const Button = ({ variant, children, className, ...rest }: Props) => {
  return (
    <button
      className={`rounded-md ${className} ${variant === "primary" ? "btn__primary" : "btn__secondary"}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
