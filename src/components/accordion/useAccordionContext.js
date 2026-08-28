import { useContext } from "react";
import { AccordionContext } from "./AccordionContext";

export function useAccordionContext() {
  const context = useContext(AccordionContext);

  if (!context) {
    throw new Error(
      "Accordion components must be used inside <Accordion />"
    );
  }

  return context;
}