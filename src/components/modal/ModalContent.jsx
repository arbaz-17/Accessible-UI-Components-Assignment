import { useRef } from "react";

import { useModalContext } from "./useModalContext";
import { useModalFocus } from "../../hooks/useModalFocus";

export function ModalContent({ children }) {
  const { isOpen, close, titleId, descriptionId, previousActiveElementRef } =
    useModalContext();

  const dialogRef = useRef(null);

  useModalFocus({
    isOpen,
    dialogRef,
    close,
    previousActiveElementRef,
  });

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="modal-overlay"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          close();
        }
      }}
    >
      <div
        ref={dialogRef}
        className="modal-content"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        tabIndex={-1}
      >
        {children}
      </div>
    </div>
  );
}
