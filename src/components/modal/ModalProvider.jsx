import { ModalContext } from "./ModalContext";

export function ModalProvider({ value, children }) {
  return (
    <ModalContext.Provider value={value}>
      {children}
    </ModalContext.Provider>
  );
}