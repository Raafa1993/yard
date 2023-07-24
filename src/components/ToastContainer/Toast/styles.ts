import styled, { css } from "styled-components/native";
import { animated } from "@react-spring/native";

interface ContainerProps {
  type?: "success" | "danger" | "warning" | "info" | "light";
  hasdescription?: number;
}

const toastTypeVariations = {
  success: css`
    color: #027a48;
    border-color: #6ce9a6;
  `,
  danger: css`
    color: #b42318;
    border-color: #d92d20;
  `,
  warning: css`
    color: #b54708;
    border-color: #f79009;
  `,
  info: css`
    color: #0045b5;
    border-color: #0089fa;
  `,
  light: css`
    color: #98a2b3;
    border-color: #d0d5dd;
  `,
};

export const Container = styled(animated.View)<ContainerProps>`
  position: relative;
  width: 360px;
  padding: 16px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: row;
  border-width: 1px;

  ${(props) => toastTypeVariations[props.type || "info"]}
`;

export const TextDescription = styled.Text`
  margin-top: 4px;
  font-size: 14px;
  opacity: 0.8;
  line-height: 20px;
  font-family: "Inter_600SemiBold";
`;

export const Content = styled.View`
  flex: 1;
`;

export const ViewIcon = styled.View`
  margin-right: 12px;
`;
