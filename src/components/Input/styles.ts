import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";
interface Props {
  isFocused: boolean;
  isIcon?: boolean;
}

export const Container = styled.View`
  width: 100%;
`;

export const Content = styled.View<Props>`
  width: 100%;
  height: 56px;
  padding-inline-start: 16px;
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

export const Label = styled.Text`
  color: ${({ theme }) => theme.colors.gray_200};
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

export const InputText = styled(TextInput).attrs({
  placeholderTextColor: "#7C7C8A",
})<Props>`
  flex: 1;
  height: 100%;
  padding-left: ${({ isIcon }) => (isIcon ? "54px" : "16px")};
  color: #fff;
  font-size: 16px;
  font-family: "Inter_400Regular";
`;
