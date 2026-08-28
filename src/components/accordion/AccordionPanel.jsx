import { useAccordionItemContext } from "./useAccordionItemContext";

export function AccordionPanel({ children }) {
  const {
    triggerId,
    panelId,
    isOpen,
  } = useAccordionItemContext();

  return (
    <div
      id={panelId}
      role="region"
      aria-labelledby={triggerId}
      hidden={!isOpen}
    >
      {children}
    </div>
  );
}