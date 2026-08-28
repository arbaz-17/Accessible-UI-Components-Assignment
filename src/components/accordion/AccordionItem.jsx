import { useId } from "react";
import { AccordionItemContext } from "./AccordionItemContext";
import { useAccordionContext } from "./useAccordionContext";

export function AccordionItem({ value, children }) {
  if (!value) {
    throw new Error("<Accordion.Item> requires a non-empty value.");
  }

  const triggerId = useId();
  const panelId = useId();
  const { isItemOpen } = useAccordionContext();
  const isOpen = isItemOpen(value);

  const contextValue = {
    value,
    triggerId,
    panelId,
    isOpen,
  };

  return (
    <AccordionItemContext.Provider value={contextValue}>
      <div className="accordion-item">{children}</div>
    </AccordionItemContext.Provider>
  );
}