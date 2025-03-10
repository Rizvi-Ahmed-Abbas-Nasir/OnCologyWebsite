import React, { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export const ContextProvider = ({ children }) => {
  const [locoScroll, setLocoScroll] = useState(null);
  const [preloader, setPreloader] = useState(true);
  const [cursorSettings, setCursorSettings] = useState({
    size: 1,
    color: "transparent",
    isBlending: false,
    text: "",
    border: "#00000057",
    blur: false,
  });

  return (
    <GlobalContext.Provider
      value={{
        preloader,
        setPreloader,
        locoScroll,
        setLocoScroll,
        setCursorSettings,
        cursorSettings,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useContextProvider = () => {
  return useContext(GlobalContext);
};
