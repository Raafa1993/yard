import React, { useState } from "react";
import { FlatList } from "react-native";

import {
  Container,
  ContainerModalView,
  TextPreview,
  ViewPreviewImage,
  ViewWrapperButtons,
} from "./styles";
import Button from "../../../components/Button";
import CardCamera from "../../../components/CardCamera";
import CardVehicle from "../../../components/CardVehicle";
import { ModalView } from "../../../components/ModalView";
interface PhotoData {
  id: number;
  image: string;
  title: string;
}
interface ModalView {
  isOpen: boolean;
  data: PhotoData;
}

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
  const [modalPhoto, setModalPhoto] = useState({
    isOpen: false,
    item: 0,
  });

  const [modalView, setModalView] = useState<ModalView>({
    isOpen: false,
    data: {} as PhotoData,
  });
  const [data, setData] = useState<PhotoData[]>(fotoData);

  const handleOnOpenModal = (item: PhotoData) => {
    if (!!item.image) {
      handleOnViewImage(item);
    } else {
      setModalPhoto({ isOpen: !modalPhoto.isOpen, item: item.id });
    }
  };

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

  const handleOnViewImage = (item: any) => {
    setModalView({ isOpen: !modalView.isOpen, data: item });
  };

  const handleOnCloseModalView = () => {
    setModalView({
      isOpen: false,
      data: {} as PhotoData,
    });
  };

  const handleOnRedoPhoto = () => {
    handleOnCloseModalView();
    setModalPhoto({
      isOpen: !modalPhoto.isOpen,
      item: modalView.data.id,
    });
  };

  return (
    <Container>
      <FlatList
        data={data}
        numColumns={numColumn}
        keyExtractor={(item: any) => item.id}
        renderItem={({ item }: any) => (
          <CardVehicle
            data={item}
            handleOnAddPhoto={() => handleOnOpenModal(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 60 }}
      />

      <CardCamera
        isVisible={modalPhoto.isOpen}
        handleInputChange={(foto) => handleOnAddPhoto(modalPhoto.item, foto)}
        onRequestClose={() =>
          setModalPhoto({ ...modalPhoto, isOpen: !modalPhoto.isOpen })
        }
      />

      <ModalView
        visible={modalView.isOpen}
        closeModal={() =>
          setModalView({ data: {} as PhotoData, isOpen: !modalView.isOpen })
        }
      >
        <ContainerModalView>
          <ViewPreviewImage
            source={{
              uri: "data:image/jpg;base64," + modalView.data?.image,
            }}
          />
          <TextPreview>{modalView?.data.title}</TextPreview>

          <ViewWrapperButtons>
            <Button
              style={{ flexGrow: 1 }}
              size="md"
              text="Fechar"
              variant="outline"
              onPress={handleOnCloseModalView}
            />
            <Button
              onPress={handleOnRedoPhoto}
              style={{ flexGrow: 1 }}
              size="md"
              text="Refazer Foto"
            />
          </ViewWrapperButtons>
        </ContainerModalView>
      </ModalView>

      <Button text="Confirmar Entrega"></Button>
    </Container>
  );
}
