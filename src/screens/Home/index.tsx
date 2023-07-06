import { useState } from "react";
import { Image, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { StatusBar } from "expo-status-bar";
import { Feather } from "@expo/vector-icons";

import { useAuth } from "../../hooks/auth";
import { Input } from "../../components/Input";
import ButtonFilter from "../../components/ButtonFilter";
import Order, { OrderProps } from "../../components/Order";

import Logo from "../../assets/logoName.png";
import {
  Container,
  Content,
  FieldGroup,
  FlatListOrders,
  Header,
  SignOutButton,
} from "./styles";
import Button from "../../components/Button";

const orderList = [
  {
    id: "1",
    codigo: "1234567",
    placa: "ABC-1234",
    chassi: "d1s3a3s2s4d45a6",
    date: "28/06/2023",
    type: "remocao",
  },
  {
    id: "2",
    codigo: "1234567",
    placa: "ABC-1234",
    chassi: "d1s3a3s2s4d45a6",
    date: "28/06/2023",
    type: "remocao",
  },
  {
    id: "3",
    codigo: "456877",
    placa: "DFR-4566",
    chassi: "d1s3a3s2s4d45a6",
    date: "28/06/2023",
    type: "vmc",
  },
  {
    id: "4",
    codigo: "556548",
    placa: "FGR-5558",
    chassi: "dd4s5a64d5sa6",
    date: "05/06/2023",
    type: "remocao",
  },
  {
    id: "5",
    codigo: "54644",
    placa: "AGG-6478",
    chassi: "d4sa65d4s5a6da",
    date: "15/06/2023",
    type: "vmc",
  },
  {
    id: "6",
    codigo: "4d56s4d5sa4d6",
    placa: "ABC-46554",
    chassi: "d1s3a3s2s4d45a6",
    date: "28/06/2023",
    type: "remocao",
  },
  {
    id: "7",
    codigo: "1d5s4a5ds64a",
    placa: "ABC-1234",
    chassi: "sd4sa5d4d4a56das",
    date: "28/06/2023",
    type: "remocao",
  },
];

export function Home({ navigation }: any) {
  const { signOut } = useAuth();
  const [statusSelected, setStatusSelected] = useState<"remocao" | "vmc">(
    "remocao"
  );
  const [orders, setOrders] = useState<OrderProps[]>(orderList as OrderProps[]);
  const filterOrder = orders.filter((item) => item.type === statusSelected);

  const history = useNavigation();

  function handleOpenDetails(orderId: string) {
    history.navigate("detailsVehicle", { orderId });
  }

  return (
    <Container>
      <StatusBar style="light" translucent={false} backgroundColor="#101828" />

      <Header>
        <Image source={Logo} />

        <SignOutButton onPress={() => navigation.openDrawer()}>
          <Feather name="menu" color="#fff" size={26} />
        </SignOutButton>
      </Header>

      <Content>
        <Input icon="search" value="" placeholder="Faça sua busca aqui..." />

        <FieldGroup>
          <ButtonFilter
            text="VEICULOS REMOCAO"
            type="remocao"
            isActive={statusSelected === "remocao"}
            onPress={() => setStatusSelected("remocao")}
          />
          <ButtonFilter
            text="ENTREGA VMC"
            type="vmc"
            isActive={statusSelected === "vmc"}
            onPress={() => setStatusSelected("vmc")}
          />
        </FieldGroup>
      </Content>

      <FlatListOrders
        data={filterOrder}
        keyExtractor={(item: any) => item.id}
        renderItem={({ item }: any) => (
          <Order data={item} onPress={() => handleOpenDetails(item.id)} />
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
              Veículos de {statusSelected === "remocao" ? "remoção" : "VMC"}
            </Text>
          </View>
        )}
      />

      <View style={{ paddingHorizontal: 16, marginBottom: 12 }}>
        <Button text="Cadastrar Entrega Direta" />
      </View>
    </Container>
  );
}
