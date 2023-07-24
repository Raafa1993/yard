import { styled } from "styled-components/native";

export const Container = styled.SafeAreaView`
  background: ${({ theme }) => theme.colors.secundaryBackground};
  flex: 1;
`;

export const ScrollView = styled.ScrollView`
  flex: 1;
  padding: 0px 16px;
  margin-top: 16px;
`;

export const ViewCardInfo = styled.View`
  padding: 16px;
  border-radius: 5px;
  gap: 8px;
  background: ${({ theme }) => theme.colors.cardInfoVehicleBackground};
  margin-bottom: 12px;
`;

export const ViewInfo = styled.View``;

export const TextInfoTitle = styled.Text`
  font-size: 14px;
  font-family: "Inter_400Regular";
  margin-bottom: 2px;
  color: ${({ theme }) => theme.colors.cardInfoVehicleTitle};
`;

export const TextInfoDescription = styled.Text`
  font-size: 16px;
  font-family: "Inter_400Regular";
  color: ${({ theme }) => theme.colors.cardInfoVehicleDescription};
`;
