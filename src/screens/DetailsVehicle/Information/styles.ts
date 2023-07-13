import { styled } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 16px;
  background: #1d2939;
`;

export const ScrollView = styled.ScrollView``;

export const ViewCardInfo = styled.View`
  padding: 20px;
  border-radius: 5px;
  gap: 8px;
  margin-bottom: 12px;

  background: ${({ theme }) => theme.colors.gray_900};
`;

export const ViewInfo = styled.View``;

export const TextInfoTitle = styled.Text`
  font-size: 14px;
  font-family: "Inter_400Regular";
  margin-bottom: 2px;
  color: ${({ theme }) => theme.colors.gray_500};
`;

export const TextInfoDescription = styled.Text`
  font-size: 16px;
  font-family: "Inter_400Regular";
  color: ${({ theme }) => theme.colors.gray_200};
`;
