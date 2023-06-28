import { styled } from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.colors.gray_900};
  padding: 24px 12px;
`;

export const ButtonBack = styled.TouchableOpacity.attrs({ activeOpacity: 0.3 })`
  align-items: center;
  justify-content: center;
  padding: 4px;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.gray_100};
  font-size: 24px;
  font-family: "Inter_700Bold";
  position: absolute;
  right: 0;
  left: 0;
  text-align: center;
  z-index: -1;
`;
