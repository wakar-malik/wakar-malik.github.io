import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState(false);
  const root = document.querySelector("#root");

  root.style.setProperty("--bgColor", theme ? "#ededed" : "#0f172a");
  // root.style.setProperty("--bgGreen", theme ? "#0ea5e9" : "#72e2ae");
  root.style.setProperty("--textColor", theme ? "#7c7c7c" : "#bebdca");
  root.style.setProperty("--white", theme ? "#000" : "#fff");
  root.style.setProperty("--opacity", theme ? 0.2 : 0.1);
  root.style.setProperty("--cardBg", theme ? "#d7d7d7" : "#1c2335");

  // --cardBg: ;

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useThemeCtxProvider = () => {
  const themeCtx = useContext(ThemeContext);
  return themeCtx;
};

export default ThemeContextProvider;
