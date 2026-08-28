import { useModalContext } from "./useModalContext";

export function ModalDescription({ children }) {
  const { descriptionId } = useModalContext();

  return <p id={descriptionId} className="modal-description">{children}</p>;
}