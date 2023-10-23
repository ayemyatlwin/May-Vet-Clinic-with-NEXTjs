import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppContextProvider({ children }) {
  const [selectedRow, setSelectedRow] = useState(20);
  const [searchQuery, setSearchQuery] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editModal, setEditModal] = useState(false);

  const contextValue = {
    selectedRow,
    setSelectedRow,
    searchQuery,
    setSearchQuery,
    showModal,
    setShowModal,
    editModal,
    setEditModal,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
