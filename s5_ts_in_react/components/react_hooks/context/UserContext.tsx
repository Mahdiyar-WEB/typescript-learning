import React, { createContext, useContext, useReducer } from "react";

type UserType = {
  name: string;
  email?: string;
  age: number;
};

type UserContextStateType = {
  user: null | UserType;
  loading: boolean;
  error: null | string;
};

type UserActionsType =
  | { type: "loading" }
  | { type: "error"; payload: string }
  | { type: "login"; payload: UserType }
  | { type: "signup"; payload: UserType }
  | { type: "logout" };

type UserContextType = {
  user: UserContextStateType;
  login: () => void;
  signup: () => void;
  logout: () => void;
};

const initialState: UserContextStateType = {
  error: null,
  loading: false,
  user: null,
};

const userReducer = (
  prevState: UserContextStateType,
  action: UserActionsType,
) => {
  switch (action.type) {
    case "loading":
      return { ...prevState, loading: true };
    case "error":
      return { ...prevState, error: action.payload };

    case "login":
      return { loading: false, error: null, user: action.payload };
    case "signup":
      return { loading: false, error: null, user: action.payload };

    case "logout":
      return initialState;
    default:
      return prevState;
  }
};

const UserContext = createContext<UserContextType | null>(null);

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, dispatch] = useReducer(userReducer, initialState);

  const logout = () => {
    dispatch({ type: "logout" });
  };

  const login = () => {
    dispatch({ type: "loading" });
    try {
      const user = {
        name: "mahdiyar",
        email: "mahdiyar472@gmail.com",
        age: 23,
      };
      dispatch({ type: "login", payload: user });
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "یک خطای ناشناخته رخ داد";
      dispatch({ type: "error", payload: message });
    }
  };

  const signup = () => {
    dispatch({ type: "loading" });
    try {
      const user = {
        name: "mahdiyar",
        email: "mahdiyar472@gmail.com",
        age: 23,
      };
      dispatch({ type: "signup", payload: user });
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "یک خطای ناشناخته رخ داد";
      dispatch({ type: "error", payload: message });
    }
  };

  return (
    <UserContext.Provider value={{ user, logout, login, signup }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined)
    throw new Error("useUser must be used inside UserProvider");

  return context;
};
