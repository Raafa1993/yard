import { styled } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.secundaryBackground};
`;

export const ContainerModalView = styled.View`
  width: 100%;
  padding: 16px;

  align-items: center;
  justify-content: center;
`;

export const ViewPreviewImage = styled.ImageBackground`
  width: 100%;
  height: 280px;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
  border-radius: 4px;
`;

export const TextPreview = styled.Text`
  font-size: 18px;
  font-family: "Inter_600SemiBold";
  color: ${({ theme }) => theme.colors.cardInfoVehicleTitle};
  margin-bottom: 20px;
  text-align: center;
`;

export const ViewWrapperButtons = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 12px;
`;
