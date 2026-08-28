import { useId, useRef, useState } from "react";

import { ModalProvider } from "./ModalProvider";
import { ModalTrigger } from "./ModalTrigger";
import { ModalContent } from "./ModalContent";
import { ModalTitle } from "./ModalTitle";
import { ModalDescription } from "./ModalDescription";
import { ModalClose } from "./ModalClose";

export function Modal({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const titleId = useId();
  const descriptionId = useId();

  const previousActiveElementRef = useRef(null);

  const open = () => {
    previousActiveElementRef.current = document.activeElement;
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  const value = {
    isOpen,
    open,
    close,
    titleId,
    descriptionId,
    previousActiveElementRef,
  };

  return (
    <ModalProvider value={value}>
      {children}
    </ModalProvider>
  );
}

Modal.Trigger = ModalTrigger;
Modal.Content = ModalContent;
Modal.Title = ModalTitle;
Modal.Description = ModalDescription;
Modal.Close = ModalClose;