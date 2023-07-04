import { useState } from "react";
import { useRoute } from "@react-navigation/native";

import { StatusBar } from "expo-status-bar";

import { Container } from "./styles";
import { Header } from "../../components/Header";
import Button from "../../components/Button";
import { ModalView } from "../../components/ModalView";
import { Text, View } from "react-native";
import ButtonFilter from "../../components/ButtonFilter";
import Select from "../../components/Select";
import CheckBox from "../../components/CheckBox";

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

  const [items, setItems] = useState([
    {
      label: "Selecione um item...",
      value: null,
    },
    {
      label: "Apple",
      value: "apple",
    },
    {
      label: "Banana",
      value: "banana",
    },
  ]);

  const [value, setValue] = useState<any>("");

  return (
    <Container>
      <StatusBar style="light" translucent={false} backgroundColor="#101828" />

      <Header title={`Veiculo ${orderId}`} />

      <View style={{ padding: 14, gap: 10 }}>
        <Button text="Abrir Modal" onPress={handleOpenGuilds} />

        <Select
          label="Placa do veiculo"
          icon="settings"
          options={items}
          onValueChange={(itemSelected) => setValue(itemSelected)}
          value={value}
        />
        <Select
          label="Placa do veiculo"
          icon="settings"
          options={items}
          onValueChange={(itemSelected) => setValue(itemSelected)}
          value={value}
        />

        <Select
          label="Placa do veiculo"
          icon="settings"
          options={items}
          onValueChange={(itemSelected) => setValue(itemSelected)}
          value={value}
        />

        <CheckBox
          onChange={(item) => console.log("BOX", item)}
          options={[{ id: 1, label: "One" }]}
          label="Aceite os termos"
        />

        <CheckBox
          onChange={(item) => console.log("BOX", item)}
          options={[
            { id: 1, label: "multiple_1" },
            { id: 2, label: "multiple_2" },
          ]}
          multiple
          label="Selecione uma opção"
          isRadius
          isDisabled
        />

        <CheckBox
          onChange={(item) => console.log("BOX", item)}
          options={[
            { id: 1, label: "Sim" },
            { id: 2, label: "Não" },
          ]}
          direction="row"
          label="Sim ou Não"
        />
      </View>

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
