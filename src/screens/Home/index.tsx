import { Image, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Feather } from "@expo/vector-icons";

import Logo from "../../assets/logoName.png";

import { Container, Header, SignOutButton } from "./styles";
import { useAuth } from "../../hooks/auth";

export function Home() {
  const { signOut, user } = useAuth();
  return (
    <Container>
      <StatusBar style="light" translucent={false} backgroundColor="#101828" />

      <Header>
        <Image source={Logo} />

        <SignOutButton onPress={() => signOut()}>
          <Feather name="log-out" color="#fff" size={26} />
        </SignOutButton>
      </Header>

      <Text style={{ color: "#fff", fontSize: 32 }}>Hello {user.name}</Text>
    </Container>
  );
}
