import { useModalContext } from "./useModalContext";

export function ModalTrigger({ children }) {
  const { open } = useModalContext();

  return (
    <button className="btn-primary" type="button" onClick={open}>
      {children}
    </button>
  );
}