import { Switch } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

import { Feather } from "@expo/vector-icons";

import { useThemeStore } from "../../../store/theme";
import { useAuth } from "../../hooks/auth";

import {
  Container,
  ViewUser,
  ViewUserProfile,
  ViewUserInfo,
  TextNameUser,
  ViewList,
  ViewSection,
  TextSection,
  ViewSectionItem,
  TextSectionItem,
  ButtonSignOut,
} from "./styles";

export default function Sidebar({ ...props }: any) {
  const { theme, toggleTheme } = useThemeStore();
  const { signOut, user } = useAuth();
  const toggleSwitch = () => toggleTheme(theme === "light" ? "dark" : "light");
  return (
    <Container>
      <DrawerContentScrollView style={{ backgroundColor: "#101828" }}>
        <ViewUser>
          <ViewUserProfile>
            <Feather name="user" color={"#fff"} size={28} />
          </ViewUserProfile>
          <ViewUserInfo>
            <TextNameUser>{user.name}</TextNameUser>
          </ViewUserInfo>
        </ViewUser>

        <ViewList>
          <DrawerItemList {...props} />
        </ViewList>

        <ViewSection>
          <TextSection>Preferências</TextSection>

          <ViewSectionItem>
            <TextSectionItem>
              {theme === "dark" ? "Dark" : "Light"}
            </TextSectionItem>
            <Switch
              trackColor={{ false: "#767577", true: "#4D7ED7" }}
              thumbColor={theme === "dark" ? "#fff" : "#f4f3f4"}
              ios_backgroundColor={"#3e3e3e"}
              onValueChange={toggleSwitch}
              value={theme === "dark" ? false : true}
            />
          </ViewSectionItem>
        </ViewSection>
      </DrawerContentScrollView>

      <ButtonSignOut onPress={() => signOut()}>
        <Feather name="power" color="#F04438" size={24} />
        <TextSectionItem style={{ color: "#F04438" }}>Sair</TextSectionItem>
      </ButtonSignOut>
    </Container>
  );
}
