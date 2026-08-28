import { useAccordionContext } from "./useAccordionContext";
import { useAccordionItemContext } from "./useAccordionItemContext";

export function AccordionTrigger({ children }) {
  const { toggleItem, accordionRef } = useAccordionContext();

  const {
    value,
    triggerId,
    panelId,
    isOpen,
  } = useAccordionItemContext();

  const handleKeyDown = (event) => {
    if (!accordionRef.current) {
      return;
    }

    const triggers = Array.from(
      accordionRef.current.querySelectorAll(
        "button[data-accordion-trigger]"
      )
    );

    if (triggers.length === 0) {
      return;
    }

    const currentIndex = triggers.indexOf(event.currentTarget);

    if (currentIndex === -1) {
      return;
    }

    let nextIndex;

    if (event.key === "ArrowDown") {
      nextIndex = (currentIndex + 1) % triggers.length;
    }

    if (event.key === "ArrowUp") {
      nextIndex =
        (currentIndex - 1 + triggers.length) % triggers.length;
    }

    if (event.key === "Home") {
      nextIndex = 0;
    }

    if (event.key === "End") {
      nextIndex = triggers.length - 1;
    }

    if (nextIndex === undefined) {
      return;
    }

    event.preventDefault();

    triggers[nextIndex].focus();
  };

  return (
    <h3>
      <button
        id={triggerId}
        type="button"
        data-accordion-trigger
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={() => toggleItem(value)}
        onKeyDown={handleKeyDown}
      >
        {children}
      </button>
    </h3>
  );
}