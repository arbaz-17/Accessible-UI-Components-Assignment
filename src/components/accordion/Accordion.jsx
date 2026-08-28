import { useRef, useState } from "react";
import { AccordionProvider } from "./AccordionProvider";
import { AccordionItem } from "./AccordionItem";
import { AccordionTrigger } from "./AccordionTrigger";
import { AccordionPanel } from "./AccordionPanel";

export function Accordion({
  type = "single",
  defaultValue = null,
  children,
}) {
  const validTypes = ["single", "multiple"];

  if (!validTypes.includes(type)) {
    throw new Error(
      'Accordion "type" must be either "single" or "multiple".'
    );
  }

  const accordionRef = useRef(null);

  const [openItems, setOpenItems] = useState(() => {
    if (type === "multiple") {
      if (defaultValue === null) return [];
      if (!Array.isArray(defaultValue)) {
        throw new Error('Accordion "defaultValue" must be an array when type is "multiple".');
      }
      return defaultValue;
    }

    if (defaultValue !== null && typeof defaultValue !== "string") {
      throw new Error('Accordion "defaultValue" must be a string or null when type is "single".');
    }
    return defaultValue;
  });

  const toggleItem = (value) => {
    if (type === "multiple") {
      setOpenItems((currentItems) => {
        if (currentItems.includes(value)) {
          return currentItems.filter((item) => item !== value);
        }
        return [...currentItems, value];
      });
      return;
    }
    setOpenItems((currentItem) => (currentItem === value ? null : value));
  };

  const isItemOpen = (value) => {
    if (type === "multiple") return openItems.includes(value);
    return openItems === value;
  };

  const contextValue = {
    type,
    openItems,
    toggleItem,
    isItemOpen,
    accordionRef,
  };

  return (
    <AccordionProvider value={contextValue}>
      <div ref={accordionRef} className="accordion-root">
        {children}
      </div>
    </AccordionProvider>
  );
}

Accordion.Item = AccordionItem;
Accordion.Trigger = AccordionTrigger;
Accordion.Panel = AccordionPanel;