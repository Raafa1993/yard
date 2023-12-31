import { createDrawerNavigator } from "@react-navigation/drawer";
import { Feather } from "@expo/vector-icons";
import StackRoutes from "./stack.routes";
import { Users } from "../screens/Users";
import Sidebar from "../components/Sidebar";
import { useThemeStore } from "../../store/theme";

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
  const { theme } = useThemeStore();
  const inactiveColor = theme === "dark" ? "#FFFFFF" : "#98A2B3";

  return (
    <Drawer.Navigator
      drawerContent={(props) => <Sidebar {...props} />}
      screenOptions={{
        drawerActiveTintColor: "#4D7ED7",
        drawerInactiveTintColor: inactiveColor,
        headerShown: false,
        drawerLabelStyle: {
          marginLeft: -24,
          fontSize: 16,
          fontWeight: "500",
        },
      }}
    >
      <Drawer.Screen
        name="initial"
        component={StackRoutes}
        options={{
          drawerIcon: ({ focused }) => (
            <Feather
              name="home"
              color={focused ? "#4D7ED7" : inactiveColor}
              size={24}
            />
          ),
          drawerLabel: "Inicio",
        }}
      />

      <Drawer.Screen
        name="user"
        component={Users}
        options={{
          drawerIcon: ({ focused }) => (
            <Feather
              name="settings"
              color={focused ? "#4D7ED7" : inactiveColor}
              size={24}
            />
          ),
          drawerLabel: "Detalhes",
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
}
