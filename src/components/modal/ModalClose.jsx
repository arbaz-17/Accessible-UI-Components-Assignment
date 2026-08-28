import { useModalContext } from "./useModalContext";

export function ModalClose({ children }) {
  const { close } = useModalContext();

  return (
    <button className="btn-secondary" type="button" onClick={close}>
      {children}
    </button>
  );
}