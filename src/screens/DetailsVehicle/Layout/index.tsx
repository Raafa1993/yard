import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Information from "../Information";
import Checklist from "../Checklist";
import Photos from "../Photos";
import { useThemeStore } from "../../../../store/theme";
import Button from "../../../components/Button";

import { Container, ViewFooter } from "./styles";

const TopTabs = createMaterialTopTabNavigator();

export default function Layout({ route }: any) {
  const { orderId } = route.params;
  const { theme } = useThemeStore();
  const topTabStyles = {
    color: theme === "dark" ? "#FFF" : "#4D7ED7",
    bg: theme === "dark" ? "#1D2939" : "#FFFFFF",
  };
  return (
    <Container>
      <TopTabs.Navigator
        screenOptions={{
          tabBarLabelStyle: {
            textTransform: "capitalize",
            fontFamily: "Inter_600SemiBold",
            fontSize: 16,
            color: topTabStyles.color,
          },
          tabBarIndicatorStyle: {
            height: 5,
            borderRadius: 5,
            backgroundColor: "#4D7ED7",
          },
          tabBarStyle: {
            backgroundColor: topTabStyles.bg,
            shadowColor: "transparent",
          },
        }}
      >
        <TopTabs.Screen
          name="information"
          component={Information}
          initialParams={{ orderId }}
        />
        <TopTabs.Screen
          name="Checklist"
          component={Checklist}
          initialParams={{ orderId }}
        />
        <TopTabs.Screen
          name="Fotos"
          component={Photos}
          initialParams={{ orderId }}
        />
      </TopTabs.Navigator>
      <ViewFooter>
        <Button text="Confirmar Entrega" />
      </ViewFooter>
    </Container>
  );
}
