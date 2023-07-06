import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabRoutes from "./tab.routes";
import { Home } from "../screens/Home";
import TopTabsGroup from "./TopTabsGroup.routes";

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="home"
    >
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen
        options={({ route }: any) => ({
          headerShown: true,
          title: `Dados Veiculo ${route.params.orderId}`,
          headerStyle: { backgroundColor: "#101828" },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
          headerTitleStyle: { fontFamily: "Inter_700Bold" },
        })}
        name="detailsVehicle"
        component={TopTabsGroup}
      />
    </Stack.Navigator>
  );
}
