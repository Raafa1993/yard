import { styled } from "styled-components/native";

export const Modal = styled.Modal.attrs({
  transparent: true,
  animationType: "fade",
  statusBarTranslucent: true,
})``;

export const Overlay = styled.View`
  flex: 1;
  background: rgba(52, 64, 84, 0.7);
  align-items: center;
  justify-content: center;
`;

export const Container = styled.View`
  width: 95%;
  align-items: center;
  justify-content: center;
  padding: 20px 16px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.gray_900};
`;

export const Content = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.gray_100};
`;

export const Bar = styled.View`
  width: 39px;
  height: 2px;
  border-radius: 2px;
  background: ${({ theme }) => theme.colors.gray_100};
  align-self: center;
`;
