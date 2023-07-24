import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { useThemeStore } from "../../store/theme";
import RegisterComplete from "../screens/RegisterVehicle/RegisterComplete";
import { RegisterPartial } from "../screens/RegisterVehicle/RegisterPartial";

const TopTabs = createMaterialTopTabNavigator();

export default function RegisterVehicle() {
  const { theme } = useThemeStore();
  const topTabStyles = {
    color: theme === "dark" ? "#FFF" : "#4D7ED7",
    bg: theme === "dark" ? "#1D2939" : "#FFFFFF",
  };

  return (
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
      <TopTabs.Screen name="Completo" component={RegisterComplete} />
      <TopTabs.Screen name="Parcial" component={RegisterPartial} />
    </TopTabs.Navigator>
  );
}
