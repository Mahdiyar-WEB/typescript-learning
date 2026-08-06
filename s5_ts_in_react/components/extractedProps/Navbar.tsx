import Link from "next/link";
import React from "react";

const Navbar = ({
  children,
  lists,
  title,
}: {
  children: React.ReactNode;
  lists: { href: string; title: string }[];
  title: string;
}) => {
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

export default Navbar;
