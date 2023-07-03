import { PropsWithChildren } from "react";
import {
  Modal as ModalUI,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";

type ModalProps = PropsWithChildren<{
  isOpen: boolean;
  onClose: () => void;
}>;

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  return (
    <ModalUI isOpen={isOpen} size="xl" onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Image details</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </ModalUI>
  );
};

export default Modal;
