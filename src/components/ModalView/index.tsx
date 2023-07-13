import React, { ReactNode } from "react";
import { ModalProps, TouchableWithoutFeedback } from "react-native";

import { Modal, Overlay, Container, Content, Bar } from "./styles";

type Props = ModalProps & {
  children: ReactNode;
  closeModal: () => void;
};

export function ModalView({ children, closeModal, ...rest }: Props) {
  return (
    <Modal {...rest}>
      <TouchableWithoutFeedback onPress={closeModal}>
        <Overlay>
          <Container>{children}</Container>
        </Overlay>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
