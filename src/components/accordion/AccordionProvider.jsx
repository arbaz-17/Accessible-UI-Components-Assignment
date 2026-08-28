import { AccordionContext } from "./AccordionContext";

export function AccordionProvider({ value, children }) {
  return (
    <AccordionContext.Provider value={value}>
      {children}
    </AccordionContext.Provider>
  );
}