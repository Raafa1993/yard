import React from "react";
import { Image } from "react-native";

import veiculoImg from "../../assets/veiculoImage.png";

import {
  Container,
  TextInfoVehicle,
  ViewImage,
  ViewVehicleInfo,
} from "./styles";

interface ItemProps {
  id: number;
  image: any;
  title: string;
}
interface Props {
  data: ItemProps;
  handleOnAddPhoto: () => void;
}

export default function CardVehicle({ data, handleOnAddPhoto }: Props) {
  const isImage = data.image !== "";
  return (
    <Container onPress={handleOnAddPhoto}>
      <ViewImage>
        <Image
          style={isImage && { width: "100%", height: "100%" }}
          source={
            isImage
              ? { uri: "data:image/jpg;base64," + data.image }
              : veiculoImg
          }
          alt={data.title}
        />
      </ViewImage>
      <ViewVehicleInfo>
        <TextInfoVehicle>{data.title}</TextInfoVehicle>
      </ViewVehicleInfo>
    </Container>
  );
}
