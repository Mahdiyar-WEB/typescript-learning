import React, { ComponentType } from "react";
import { DashboardProps } from "./Dashboard";

type Props = {
  isLoggedIn: boolean;
  component: ComponentType<DashboardProps>;
};

const Wrapper = ({ isLoggedIn, component: Component }: Props) => {
  return <div>{isLoggedIn ? <Component name="test" /> : <Login />}</div>;
};

export default Wrapper;

const Login = () => {
  return <div>login....</div>;
};
