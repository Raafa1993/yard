import { styled } from "styled-components/native";
import { DrawerContentScrollView } from "@react-navigation/drawer";

export const Container = styled.View`
  flex: 1;
`;

export const ViewDrawerScroll = styled(DrawerContentScrollView)`
  background-color: ${({ theme }) => theme.colors.sidebarBackground};
`;

export const ViewUser = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 12px;
  padding: 18px 12px;
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.colors.sidebarLine};
  margin-bottom: 14px;
`;

export const ViewUserProfile = styled.View`
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  border-radius: 50px;
  background: ${({ theme }) => theme.colors.primary_900};
`;

export const ViewUserInfo = styled.View``;

export const TextNameUser = styled.Text`
  color: ${({ theme }) => theme.colors.sidebarTextPrimary};
  font-size: 16px;
  font-family: "Inter_600SemiBold";
`;

export const TextLocation = styled.Text`
  color: ${({ theme }) => theme.colors.sidebarTextSecundary};
  font-size: 12px;
  font-family: "Inter_500Medium";
`;

export const ViewLocation = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 6px;
  margin-top: 2px;
`;

export const ViewList = styled.View`
  padding-bottom: 16px;
`;

export const ViewSection = styled.View`
  padding: 16px 16px;
  border-top-width: 1px;
  border-color: ${({ theme }) => theme.colors.sidebarLine};
`;

export const TextSection = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.gray_400};
`;

export const ViewSectionItem = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TextSectionItem = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.sidebarTextPrimary};
`;

export const ButtonSignOut = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9,
})`
  background: ${({ theme }) => theme.colors.sidebarBackground};
  border-top-width: 1px;
  border-color: ${({ theme }) => theme.colors.sidebarLine};
  padding: 12px;
  flex-direction: row;
  gap: 18px;
`;
