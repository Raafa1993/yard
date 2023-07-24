import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";
interface Props {
  isFocused: boolean;
  isIcon?: boolean;
  isIconRight?: boolean;
}

export const Container = styled.View`
  width: 100%;
`;

export const Content = styled.View<Props>`
  width: 100%;
  height: 56px;
  padding-inline-start: 16px;
  background: ${({ theme }) => theme.colors.inputBackground};
  border-radius: 6px;
  margin-bottom: 8px;
  border-width: 2px;
  border-color: ${({ theme }) => theme.colors.inputBorder};

  flex-direction: row;
  align-items: center;

  ${(props) =>
    props.isFocused &&
    css`
      border-color: ${({ theme }) => theme.colors.primary_600};
    `}
`;

export const Label = styled.Text`
  color: ${({ theme }) => theme.colors.inputLabel};
  font-size: 16px;
  font-family: "Inter_400Regular";
  margin-bottom: 6px;
  text-transform: capitalize;
`;

export const IconContainer = styled.View`
  margin: 0 14px;
  position: absolute;
  left: 0;
  z-index: 2;
  pointer-events: none;
`;

export const ViewIconRight = styled.View`
  position: absolute;
  right: 6px;
  z-index: 99;
  height: 80%;
`;

export const InputText = styled(TextInput).attrs({
  placeholderTextColor: "#98A2B3",
})<Props>`
  flex: 1;
  height: 100%;
  padding-left: ${({ isIcon }) => (isIcon ? "54px" : "16px")};
  padding-right: ${({ isIconRight }) => (isIconRight ? "58px" : "10px")};
  color: ${({ theme }) => theme.colors.inputText};
  font-size: 16px;
  font-family: "Inter_400Regular";
`;
