import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Information from "../screens/DetailsVehicle/Information";
import Checklist from "../screens/DetailsVehicle/Checklist";
import Photos from "../screens/DetailsVehicle/Photos";

const TopTabs = createMaterialTopTabNavigator();

export default function TopTabsGroup({ route }: any) {
  const { orderId } = route.params;

  return (
    <TopTabs.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          textTransform: "capitalize",
          fontFamily: "Inter_600SemiBold",
          fontSize: 16,
          color: "#fff",
        },
        tabBarIndicatorStyle: {
          height: 5,
          borderRadius: 5,
          backgroundColor: "#4D7ED7",
        },
        tabBarStyle: {
          backgroundColor: "#1D2939",
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
  );
}
