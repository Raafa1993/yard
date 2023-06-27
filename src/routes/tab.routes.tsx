import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

import { Settings } from "../screens/Settings";
import { Home } from "../screens/Home";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#4D7ED7",
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#101828",
          height: 60,
          paddingBottom: 4,
          borderTopWidth: 0,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "500",
        },
      }}
    >
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" color={color} size={size} />
          ),
          tabBarLabel: "Home",
        }}
      />
      <Tab.Screen
        name="settings"
        component={Settings}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="settings" color={color} size={size} />
          ),
          tabBarLabel: "Settings",
        }}
      />
    </Tab.Navigator>
  );
}
