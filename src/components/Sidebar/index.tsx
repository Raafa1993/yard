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
  ViewDrawerScroll,
  ViewUserProfile,
  ViewUserInfo,
  TextNameUser,
  ViewList,
  ViewSection,
  TextSection,
  ViewSectionItem,
  TextSectionItem,
  ButtonSignOut,
  TextLocation,
  ViewLocation,
} from "./styles";

export default function Sidebar({ ...props }: any) {
  const { theme, toggleTheme } = useThemeStore();
  const { signOut, user } = useAuth();
  const toggleSwitch = () => toggleTheme(theme === "light" ? "dark" : "light");
  return (
    <Container>
      <ViewDrawerScroll>
        <ViewUser>
          <ViewUserProfile>
            <Feather name="user" color={"#FFF"} size={28} />
          </ViewUserProfile>
          <ViewUserInfo>
            <TextNameUser>{user.name}</TextNameUser>
            <ViewLocation>
              <Feather
                name="map-pin"
                size={12}
                color={theme === "dark" ? "#D0D5DD" : "#98A2B3"}
              />
              <TextLocation>{user.patio}</TextLocation>
            </ViewLocation>
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
      </ViewDrawerScroll>

      <ButtonSignOut onPress={() => signOut()}>
        <Feather name="power" color="#F04438" size={24} />
        <TextSectionItem style={{ color: "#F04438", fontWeight: "500" }}>
          Sair
        </TextSectionItem>
      </ButtonSignOut>
    </Container>
  );
}
