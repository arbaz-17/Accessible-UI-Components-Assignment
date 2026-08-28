import { useModalContext } from "./useModalContext";

export function ModalTrigger({ children }) {
  const { open } = useModalContext();

  return (
    <button type="button" onClick={open}>
      {children}
    </button>
  );
}