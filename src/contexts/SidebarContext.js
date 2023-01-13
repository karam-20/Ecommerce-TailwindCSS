import React, { createContext, useState, useContext } from "react";

const SidebarContext = createContext();

const SidebarProvider = ({ children }) => {
  const [isOpen, setisOpen] = useState(false);
  const handleClose = () => {
    setisOpen(false);
  };
  return (
    <SidebarContext.Provider value={{ isOpen, setisOpen, handleClose }}>
      {children}
    </SidebarContext.Provider>
  );
};

const useSidebarProviderContext = () => {
  return useContext(SidebarContext);
};

export { useSidebarProviderContext, SidebarContext, SidebarProvider };
