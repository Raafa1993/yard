import { styled } from "styled-components/native";

export const Container = styled.View``;

export const Content = styled.View`
  width: 100%;
  height: 56px;
  background: ${({ theme }) => theme.colors.inputBackground};
  border-radius: 6px;
  margin-bottom: 8px;
  border-width: 2px;
  border-color: ${({ theme }) => theme.colors.inputBorder};

  flex-direction: row;
  align-items: center;
  position: relative;
`;

export const TextLabel = styled.Text`
  color: ${({ theme }) => theme.colors.inputLabel};
  font-size: 16px;
  font-family: "Inter_400Regular";
  margin-bottom: 6px;
  text-transform: capitalize;
`;
