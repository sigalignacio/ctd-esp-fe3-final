// src/ContextGlobal.jsx
import React, { createContext, useState, useMemo } from "react";

export const initialState = { theme: "light", data: [] };

export const ContextGlobal = createContext(initialState);

export const ContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(initialState.theme);
  const [data, setData] = useState(initialState.data);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const contextValue = useMemo(() => ({
    theme,
    toggleTheme,
    data,
    setData
  }), [theme, data]);

  return (
    <ContextGlobal.Provider value={contextValue}>
      {children}
    </ContextGlobal.Provider>
  );
};
