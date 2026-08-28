import { useContext } from "react";
import { AccordionItemContext } from "./AccordionItemContext";

export function useAccordionItemContext() {
  const context = useContext(AccordionItemContext);

  if (!context) {
    throw new Error(
      "Accordion item components must be used inside <Accordion.Item />"
    );
  }

  return context;
}