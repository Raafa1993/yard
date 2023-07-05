import styled from "styled-components/native";

export const Container = styled.TouchableOpacity.attrs({ activeOpacity: 0.3 })`
  width: 100%;
  height: 56px;
  background: ${({ theme }) => theme.colors.primary_600};
  border-radius: 6px;

  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: "Inter_500Medium";
  color: #fff;
  font-size: 18px;
`;
