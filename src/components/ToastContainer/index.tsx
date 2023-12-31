import React from "react";
import { useTransition } from "@react-spring/native";
import { ToastMessage } from "../../@types/ToastMessage";

import Toast from "../ToastContainer/Toast";

import { Container } from "./styles";
interface ToastContainerProps {
  messages: ToastMessage[];
  handleOnRemoveToast: (id: any) => void;
}

export default function ToastContainer({
  messages,
  handleOnRemoveToast,
}: ToastContainerProps) {
  const messagesWithTransitions = useTransition(messages, {
    from: { right: "-120%", opacity: 0 },
    enter: { right: "0%", opacity: 1 },
    leave: { right: "-120%", opacity: 0 },
  });

  return (
    <Container>
      {messagesWithTransitions((styles, item) => {
        if (item) {
          return (
            <Toast
              key={item.id}
              message={item}
              style={styles}
              handleOnRemoveToast={handleOnRemoveToast}
            />
          );
        }
        return null;
      })}
    </Container>
  );
}
