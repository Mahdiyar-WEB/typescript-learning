import { ComponentProps } from "react";
import Navbar from "./Navbar";
import Link from "next/link";

const CustomNavbar = ({
  children,
  lists,
  title,
}: ComponentProps<typeof Navbar>) => {
  return (
    <nav>
      <h3>{title}</h3>
      <ul>
        {lists.map(({ href, title }, index) => {
          return (
            <li key={index}>
              <Link href={href}>{title}</Link>
            </li>
          );
        })}
      </ul>
      {children}
    </nav>
  );
};

export default CustomNavbar;
