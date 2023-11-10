import { createContext, useContext, useState } from "react";

const PopupContext = createContext();

export function PopupProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [element, setElement] = useState();

  function openPopup(element) {
    setOpen(true);
    setElement(element);
  }

  function closePopup() {
    setOpen(false);
    setElement(null);
  }

  return (
    <PopupContext.Provider value={{ open, element, openPopup, closePopup }}>
      {children}
    </PopupContext.Provider>
  );
}

export function usePopup() {
  const context = useContext(PopupContext);

  return context;
}
