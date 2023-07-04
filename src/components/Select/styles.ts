import { styled } from "styled-components/native";

export const Container = styled.View``;

export const Content = styled.View`
  width: 100%;
  height: 55px;
  background: ${({ theme }) => theme.colors.gray_900};
  border-radius: 6px;
  margin-bottom: 4px;
  border-width: 2px;
  border-color: ${({ theme }) => theme.colors.gray_900};

  flex-direction: row;
  align-items: center;
  position: relative;
`;

export const TextLabel = styled.Text`
  color: #fff;
  font-size: 16px;
  font-family: "Inter_400Regular";
  margin-bottom: 6px;
  text-transform: capitalize;
`;
