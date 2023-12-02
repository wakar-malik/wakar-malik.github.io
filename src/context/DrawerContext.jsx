import React, { createContext } from "react";
import { useContext } from "react";
import { useState } from "react";

const DrawerContext = createContext();

function DrawerContextProvider({ children }) {
  const [drawer, setDrawer] = useState(false);

  return (
    <DrawerContext.Provider value={{ drawer, setDrawer }}>
      {children}
    </DrawerContext.Provider>
  );
}

export const useDrawerCtxProvider = () => {
  const drawerCtx = useContext(DrawerContext);
  return drawerCtx;
};

export default DrawerContextProvider;
