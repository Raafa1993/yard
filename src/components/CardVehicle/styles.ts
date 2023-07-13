import { Dimensions } from "react-native";
import styled from "styled-components/native";

const width = Dimensions.get("window").width - 44;

export const Container = styled.TouchableOpacity.attrs({ activeOpacity: 0.9 })`
  width: ${width / 2 + "px"};
  margin: 4px;
  padding: 10px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.gray_900};
  gap: 6px;
`;

export const ViewImage = styled.View`
  border-radius: 2px;
  background-color: ${({ theme }) => theme.colors.gray_600};
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 100px;
`;

export const ViewVehicleInfo = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TextInfoVehicle = styled.Text`
  color: ${({ theme }) => theme.colors.gray_300};
  font-size: 14px;
`;
