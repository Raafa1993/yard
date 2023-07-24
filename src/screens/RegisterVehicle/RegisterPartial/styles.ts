import styled from "styled-components/native";
import { Platform } from "react-native";

export const Container = styled.View`
  padding: 16px;
  justify-content: center;
  background: ${({ theme }) => theme.colors.secundaryBackground};
  flex: 1;
`;
