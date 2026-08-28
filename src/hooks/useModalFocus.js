import { useEffect } from "react";

const focusableSelector = [
  "button:not([disabled])",
  "a[href]",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "[tabindex]:not([tabindex='-1'])",
].join(",");

export function useModalFocus({
  isOpen,
  dialogRef,
  close,
  previousActiveElementRef,
}) {
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      if (!dialogRef.current) {
        return;
      }

      const focusableElements = Array.from(
        dialogRef.current.querySelectorAll(focusableSelector)
      );

      if (focusableElements.length === 0) {
        event.preventDefault();
        dialogRef.current.focus();
        return;
      }

      const firstFocusableElement = focusableElements[0];
      const lastFocusableElement =
        focusableElements[focusableElements.length - 1];

      if (
        event.shiftKey &&
        document.activeElement === firstFocusableElement
      ) {
        event.preventDefault();
        lastFocusableElement.focus();
        return;
      }

      if (
        !event.shiftKey &&
        document.activeElement === lastFocusableElement
      ) {
        event.preventDefault();
        firstFocusableElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, close, dialogRef]);

  useEffect(() => {
    if (!isOpen || !dialogRef.current) {
      return;
    }

    const focusableElements = Array.from(
      dialogRef.current.querySelectorAll(focusableSelector)
    );

    const firstFocusableElement = focusableElements[0];

    if (firstFocusableElement) {
      firstFocusableElement.focus();
    } else {
      dialogRef.current.focus();
    }
  }, [isOpen, dialogRef]);

  useEffect(() => {
    if (isOpen) {
      return;
    }

    const previousElement = previousActiveElementRef.current;

    if (
      previousElement instanceof HTMLElement &&
      document.contains(previousElement)
    ) {
      previousElement.focus();
    }

    previousActiveElementRef.current = null;
  }, [isOpen, previousActiveElementRef]);
}