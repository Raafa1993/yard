import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.secundaryBackground};
`;

export const ViewFooter = styled.View`
  padding: 0 16px;
  margin-bottom: 12px;
`;
