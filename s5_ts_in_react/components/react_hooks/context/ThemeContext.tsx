import { createContext, useContext, useState } from "react";

type ThemeType = "light" | "dark";

type ThemeContextType = {
  theme: ThemeType;
  changeThemeHandler: (theme: ThemeType) => void;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  changeThemeHandler: () => {},
});

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<ThemeType>("light");

  const changeThemeHandler = (newTheme: ThemeType) => {
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, changeThemeHandler }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

export const UseTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) return;
  return context;
};
