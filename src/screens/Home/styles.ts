import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.gray_800};
`;

export const Header = styled.View`
  padding: 24px;
  height: 98px;
  background: ${({ theme }) => theme.colors.gray_900};

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SignOutButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.3,
})`
  align-items: center;
  justify-content: center;
`;
