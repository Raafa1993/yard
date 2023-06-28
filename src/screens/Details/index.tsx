import { useState } from "react";
import { useRoute } from "@react-navigation/native";

import { StatusBar } from "expo-status-bar";

import { Container } from "./styles";
import { Header } from "../../components/Header";
import Button from "../../components/Button";
import { ModalView } from "../../components/ModalView";
import { Text, View } from "react-native";
import ButtonFilter from "../../components/ButtonFilter";

type RouteParams = {
  orderId: string;
};

export function Details() {
  const [isLoading, setIsLoading] = useState(true);
  const [openGuildsModa, setOpenGuildsModal] = useState(false);

  const route = useRoute();
  const { orderId } = route.params as RouteParams;

  function handleOpenGuilds() {
    setOpenGuildsModal(true);
  }

  function handleCloseGuilds() {
    setOpenGuildsModal(false);
  }

  return (
    <Container>
      <StatusBar style="light" translucent={false} backgroundColor="#101828" />

      <Header title={`Veiculo ${orderId}`} />

      <Button text="Abrir Modal" onPress={handleOpenGuilds} />

      <ModalView visible={openGuildsModa} closeModal={handleCloseGuilds}>
        <View>
          <Text style={{ color: "#fff", textAlign: "center", fontSize: 22 }}>
            Modal aberto
          </Text>

          <View style={{ flexDirection: "row", marginTop: 20, width: "100%" }}>
            <ButtonFilter text="Não" type="remocao" isActive />
            <ButtonFilter
              text="Sim"
              type="vmc"
              isActive
              style={{ marginLeft: 12 }}
            />
          </View>
        </View>
      </ModalView>
    </Container>
  );
}
