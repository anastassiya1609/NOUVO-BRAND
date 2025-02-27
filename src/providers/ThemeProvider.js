import { useState, createContext, useContext } from "react";

const ThemeContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export default function ThemeProvider(props) {
  const [isDarkTheme, setIsDarkTheme] = useState(() =>{
    const storedTheme = localStorage.getItem("isDark");
    return storedTheme === "true" ? true : false; 
  });

  function toggleDarkTheme() {
    setIsDarkTheme(!isDarkTheme);
    localStorage.setItem("isDark", !isDarkTheme);
  }
  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleDarkTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
