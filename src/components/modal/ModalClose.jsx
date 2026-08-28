import { useModalContext } from "./useModalContext";

export function ModalClose({ children }) {
  const { close } = useModalContext();

  return (
    <button type="button" onClick={close}>
      {children}
    </button>
  );
}