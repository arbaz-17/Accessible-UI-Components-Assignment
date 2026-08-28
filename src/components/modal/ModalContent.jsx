import { useModalContext } from "./useModalContext";

export function ModalContent({ children }) {
  const { isOpen } = useModalContext();

  if (!isOpen) {
    return null;
  }

  return <div>{children}</div>;
}