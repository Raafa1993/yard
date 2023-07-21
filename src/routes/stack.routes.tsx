import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/Home";
import RegisterVehicle from "./RegisterVehicle.routes";
import { useThemeStore } from "../../store/theme";
import Layout from "../screens/DetailsVehicle/Layout";

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  const { theme } = useThemeStore();
  const stackStyles = theme === "dark" ? "#101828" : "#1D5AB9";
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="home"
    >
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen
        options={({ route }: any) => ({
          headerShown: true,
          title: "Cadastrar Veículo",
          headerStyle: { backgroundColor: stackStyles },
          headerTintColor: "#FFF",
          headerTitleAlign: "center",
          headerTitleStyle: { fontFamily: "Inter_700Bold" },
        })}
        name="registerVehicle"
        component={RegisterVehicle}
      />
      <Stack.Screen
        options={({ route }: any) => ({
          headerShown: true,
          title: `Dados Veiculo ${route.params.orderId}`,
          headerStyle: { backgroundColor: stackStyles },
          headerTintColor: "#FFF",
          headerTitleAlign: "center",
          headerTitleStyle: { fontFamily: "Inter_700Bold" },
        })}
        name="detailsVehicle"
        component={Layout}
      />
    </Stack.Navigator>
  );
}
