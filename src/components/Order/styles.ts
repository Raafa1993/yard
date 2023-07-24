import { styled } from "styled-components/native";

interface StatusCOlorProps {
  statusColor?: string;
}

export const Pressable = styled.Pressable``;

export const ViewContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.cardOrderBackground};
  margin-bottom: 12px;
  overflow: hidden;
  position: relative;
  border-radius: 6px;
`;

export const ViewBox = styled.View<StatusCOlorProps>`
  height: 100%;
  width: 8px;
  background-color: ${({ statusColor }) => statusColor};
  position: absolute;
  left: 0;
`;

export const ViewInfo = styled.View`
  flex: 1;
  padding: 12px 18px;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.cardOrderText};
  font-size: 14px;
  font-family: "Inter_700Bold";
  margin-bottom: 4px;
`;

export const ViewTextGroup = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ViewGroup = styled.Text`
  color: ${({ theme }) => theme.colors.gray_500};
  font-size: 14px;
  font-family: "Inter_700Bold";
  margin-bottom: 4px;
`;
