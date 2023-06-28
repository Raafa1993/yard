import styled from "styled-components/native";
import { Platform } from "react-native";

export const Container = styled.View`
  padding: 0 30px ${Platform.OS === "android" ? 30 : 30}px;
  justify-content: center;
  flex: 1;
  background: ${({ theme }) => theme.colors.gray_800};
`;

export const BackButton = styled.TouchableOpacity`
  margin-top: 40px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #f4ede8;
  font-family: "Inter_500Medium";
  margin: 24px 0;
`;

export const UserAvatarButton = styled.TouchableOpacity`
  width: 80px;
  height: 80px;
  border-radius: 96px;

  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.primary_600};
  margin-left: 12px;
`;

export const UserAvatar = styled.View`
  width: 186px;
  height: 186px;
  border-radius: 96px;

  align-items: center;
  justify-content: center;
  background-color: red;
`;

export const SwitchContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
