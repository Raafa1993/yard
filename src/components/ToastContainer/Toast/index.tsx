import React, { useEffect } from "react";
import { Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

import { ToastMessage } from "../../../@types/ToastMessage";
import { useToast } from "../../../hooks/toast";

import { Container, Content, TextDescription, ViewIcon } from "./styles";

interface ToastProps {
  message: ToastMessage;
  style: object;
}

const icons = {
  info: <Feather name="info" size={24} color="#5D8AE1" />,
  success: <Feather name="check-circle" size={24} color="#12B76A" />,
  danger: <Feather name="alert-circle" size={24} color="#F04438" />,
  warning: <Feather name="alert-circle" size={24} color="#F79009" />,
  light: <Feather name="alert-circle" size={24} color="#667085" />,
};

export default function Toast({ message, style }: ToastProps) {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(message.id);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [message.id, removeToast]);

  return (
    <Container
      type={message.type}
      hasdescription={Number(!!message.description)}
      style={style}
    >
      <ViewIcon>{icons[message.type || "info"]}</ViewIcon>

      <Content>
        <Text style={{ color: "#FFF" }}>{message.title}</Text>
        {message.description && (
          <TextDescription>{message.description}</TextDescription>
        )}
      </Content>

      <TouchableOpacity
        onPress={() => removeToast(message.id)}
        style={{
          position: "absolute",
          right: 16,
          top: 19,
          backgroundColor: "transparent",
        }}
      >
        <Feather name="x-circle" size={22} color="#FFF" />
      </TouchableOpacity>
    </Container>
  );
}
