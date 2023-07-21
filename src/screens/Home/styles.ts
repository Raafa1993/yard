import { FlatList, FlatListProps } from "react-native";
import styled from "styled-components/native";
import { OrderProps } from "../../components/Order";

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.secundaryBackground};
`;

export const Header = styled.View`
  padding: 24px;
  /* height: 98px; */
  background: ${({ theme }) => theme.colors.primaryBackground};

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

export const Content = styled.View`
  padding: 16px 16px 0;
  margin-bottom: 8px;
`;

export const FieldGroup = styled.View`
  flex-direction: row;
  gap: 12px;
  width: 100%;
`;

export const FlatListOrders = styled(
  FlatList as new (props: FlatListProps<OrderProps>) => FlatList<OrderProps>
)`
  margin-top: 24px;
  padding: 0 16px;
`;
