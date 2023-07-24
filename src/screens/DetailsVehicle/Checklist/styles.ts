import { styled } from "styled-components/native";

interface ColorProps {
  color: string;
}

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.secundaryBackground};
`;

export const ScrollView = styled.ScrollView`
  padding: 0px 16px;
  margin-top: 16px;
  flex: 1;
`;

export const ViewCardInfo = styled.View`
  padding: 20px;
  border-radius: 5px;
  margin-bottom: 12px;

  background: ${({ theme }) => theme.colors.cardInfoVehicleBackground};
`;

export const ViewInfo = styled.View``;

export const ViewLegend = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const ViewLEgendGroup = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 6px;
`;

export const TextStyleLegend = styled.Text<ColorProps>`
  font-size: 18px;
  font-family: "Inter_700Bold";
  color: ${({ color }) => color};
`;

export const TextInfoTitle = styled.Text`
  font-size: 14px;
  font-family: "Inter_400Regular";
  margin-bottom: 6px;
  color: ${({ theme }) => theme.colors.cardInfoVehicleTitle};
`;

export const TextInfoDescription = styled.Text`
  font-size: 12px;
  font-family: "Inter_400Regular";
  color: ${({ theme }) => theme.colors.cardInfoVehicleDescription};
`;
