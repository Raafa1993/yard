import React, { useEffect } from "react";
import { Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

import { ToastMessage } from "../../../@types/ToastMessage";
import { Container, Content, TextDescription, ViewIcon } from "./styles";
import { useThemeStore } from "../../../../store/theme";
interface ToastProps {
  message: ToastMessage;
  style: object;
  handleOnRemoveToast: (id: any) => void;
}

const icons = {
  info: <Feather name="info" size={24} color="#5D8AE1" />,
  success: <Feather name="check-circle" size={24} color="#12B76A" />,
  danger: <Feather name="alert-circle" size={24} color="#F04438" />,
  warning: <Feather name="alert-circle" size={24} color="#F79009" />,
  light: <Feather name="alert-circle" size={24} color="#667085" />,
};

export default function Toast({
  message,
  style,
  handleOnRemoveToast,
}: ToastProps) {
  const { theme } = useThemeStore();

  const themeColors = {
    bg: theme === "dark" ? "#101828" : "#EAECF0",
    title: theme === "dark" ? "#FFF" : "#1D2939",
    description: theme === "dark" ? "#d0d5dd" : "#101828",
    icon: theme === "dark" ? "#FFF" : "#F04438",
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleOnRemoveToast(message.id);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [message.id, handleOnRemoveToast]);

  return (
    <Container
      type={message.type}
      hasdescription={Number(!!message.description)}
      style={[style, { backgroundColor: themeColors.bg }]}
    >
      <ViewIcon>{icons[message.type || "info"]}</ViewIcon>

      <Content>
        <Text
          style={{ color: themeColors.title, fontFamily: "Inter_500Medium" }}
        >
          {message.title}
        </Text>
        {message.description && (
          <TextDescription style={{ color: themeColors.description }}>
            {message.description}
          </TextDescription>
        )}
      </Content>

      <TouchableOpacity
        onPress={() => handleOnRemoveToast(message.id)}
        style={{
          position: "absolute",
          right: 16,
          top: 19,
          backgroundColor: "transparent",
        }}
      >
        <Feather name="x-circle" size={22} color={themeColors.icon} />
      </TouchableOpacity>
    </Container>
  );
}
