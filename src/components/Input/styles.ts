import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";

interface Props {
  isFocused: boolean;
}

export const Container = styled.View<Props>`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: ${({ theme }) => theme.colors.gray_900};
  border-radius: 6px;
  margin-bottom: 8px;
  border-width: 2px;
  border-color: ${({ theme }) => theme.colors.gray_900};

  flex-direction: row;
  align-items: center;

  ${(props) =>
    props.isFocused &&
    css`
      border-color: ${({ theme }) => theme.colors.primary_600};
    `}
`;

export const IconContainer = styled.View`
  margin-right: 16px;
`;

export const InputText = styled(TextInput).attrs({
  placeholderTextColor: "#7C7C8A",
})<Props>`
  flex: 1;
  color: #fff;
  font-size: 16px;
  font-family: "Inter_400Regular";
`;
