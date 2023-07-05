import { styled } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const ViewUser = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 12px;
  padding: 18px 12px;
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.colors.gray_800};
  margin-bottom: 14px;
`;

export const ViewUserProfile = styled.View`
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  border-radius: 50px;
  background: ${({ theme }) => theme.colors.gray_800};
`;

export const ViewUserInfo = styled.View``;

export const TextNameUser = styled.Text`
  color: #fff;
  font-size: 16px;
  font-family: "Inter_600SemiBold";
`;

export const ViewList = styled.View`
  padding-bottom: 16px;
`;

export const ViewSection = styled.View`
  padding: 16px 16px;
  border-top-width: 1px;
  border-color: ${({ theme }) => theme.colors.gray_800};
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
  color: #fff;
`;

export const ButtonSignOut = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9,
})`
  background: ${({ theme }) => theme.colors.gray_900};
  border-top-width: 1px;
  border-color: ${({ theme }) => theme.colors.gray_800};
  padding: 12px;
  flex-direction: row;
  gap: 18px;
`;
