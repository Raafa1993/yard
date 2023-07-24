import Animated from "react-native-reanimated";
import { styled } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.accordionBackground};
  border-radius: 5px;
  margin-bottom: 12px;
`;

export const ViewHeader = styled.View`
  padding: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TextTitle = styled.Text`
  font-size: 16px;
  font-family: "Inter_700Bold";
  color: ${({ theme }) => theme.colors.accordionTitle};
`;

export const ViewContent = styled(Animated.View)`
  overflow: hidden;
`;

export const ViewRow = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  padding: 0 34px;
  border-bottom: 1px;
  border-bottom-width: 1px;
  border-color: #98a2b3;
  gap: 26px;
`;

export const TextRow = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.accordionDescription};
  height: 28px;
`;
