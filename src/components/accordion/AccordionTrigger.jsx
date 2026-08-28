import { useAccordionContext } from "./useAccordionContext";
import { useAccordionItemContext } from "./useAccordionItemContext";

export function AccordionTrigger({ children }) {
  const { toggleItem, accordionRef } = useAccordionContext();
  const { value, triggerId, panelId, isOpen } = useAccordionItemContext();

  const handleKeyDown = (event) => {
    if (!accordionRef.current) return;

    const triggers = Array.from(
      accordionRef.current.querySelectorAll("button[data-accordion-trigger]")
    );

    if (triggers.length === 0) return;

    const currentIndex = triggers.indexOf(event.currentTarget);
    if (currentIndex === -1) return;

    let nextIndex;
    if (event.key === "ArrowDown") nextIndex = (currentIndex + 1) % triggers.length;
    if (event.key === "ArrowUp") nextIndex = (currentIndex - 1 + triggers.length) % triggers.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = triggers.length - 1;

    if (nextIndex === undefined) return;

    event.preventDefault();
    triggers[nextIndex].focus();
  };

  return (
    <h3 className="accordion-header">
      <button
        id={triggerId}
        type="button"
        className="accordion-trigger"
        data-accordion-trigger
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={() => toggleItem(value)}
        onKeyDown={handleKeyDown}
      >
        {children}
        {/* Animated Chevron Icon */}
        <svg
          className="accordion-chevron"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
    </h3>
  );
}