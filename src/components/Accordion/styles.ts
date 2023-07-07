import Animated from "react-native-reanimated";
import { styled } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray_900};
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
  color: ${({ theme }) => theme.colors.gray_300};
`;

export const ViewContent = styled(Animated.View)`
  overflow: hidden;
`;
