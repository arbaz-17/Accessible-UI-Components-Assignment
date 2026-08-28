import { useModalContext } from "./useModalContext";

export function ModalTitle({ children }) {
  const { titleId } = useModalContext();

  return <h2 id={titleId}>{children}</h2>;
}