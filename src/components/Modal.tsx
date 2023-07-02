import { PropsWithChildren } from "react";

type ModalProps = PropsWithChildren<{
  isOpen: boolean;
  onClose: () => void;
}>;

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div>
      <button onClick={onClose}>x</button>
      {children}
    </div>
  );
};

export default Modal;
