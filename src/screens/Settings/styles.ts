import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.colors.gray_100};
  color: ${({ theme }) => theme.colors.gray_300};
`;