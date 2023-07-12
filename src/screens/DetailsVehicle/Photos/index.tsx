import React, { useState } from "react";
import { ScrollView, Image, View, FlatList, Text } from "react-native";

import veiculoImg from "../../../assets/veiculoImage.png";

import { Container } from "./styles";
import Button from "../../../components/Button";
import CardCamera from "../../../components/CardCamera";
import CardVehicle from "../../../components/CardVehicle";

const fotoData = [
  {
    id: 1,
    image: "",
    title: "01 - Lateral",
  },
  {
    id: 2,
    image: "",
    title: "02 - Lateral",
  },
  {
    id: 3,
    image: "",
    title: "03 - Lateral",
  },
];

const numColumn = 2;

export default function Photos() {
  const [isPhoto, setIsPhoto] = useState({
    isOpen: false,
    item: 0,
  });
  const [data, setData] = useState(fotoData);

  const handleOnAddPhoto = (id: number, photo: string) => {
    setData((prev) => {
      const updateData = prev.map((row) => {
        if (row.id === id) {
          return { ...row, image: photo };
        }
        return row;
      });
      return updateData;
    });
  };

  // console.log("DATA", data);

  return (
    <Container>
      <FlatList
        data={data}
        numColumns={numColumn}
        keyExtractor={(item: any) => item.id}
        renderItem={({ item }: any) => (
          <CardVehicle
            data={item}
            handleOnAddPhoto={() =>
              setIsPhoto({ isOpen: !isPhoto.isOpen, item: item.id })
            }
          />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 60 }}
        ListEmptyComponent={() => (
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              flex: 1,
            }}
          >
            <Text style={{ color: "#fff", fontSize: 20, textAlign: "center" }}>
              Você ainda não possui {"\n"}
              Fotos de veiculos
            </Text>
          </View>
        )}
      />

      <CardCamera
        isVisible={isPhoto.isOpen}
        handleInputChange={(foto) => handleOnAddPhoto(isPhoto.item, foto)}
        onRequestClose={() =>
          setIsPhoto({ ...isPhoto, isOpen: !isPhoto.isOpen })
        }
      />

      <Button text="Confirmar Entrega"></Button>
    </Container>
  );
}
