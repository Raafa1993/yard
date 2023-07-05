import { NavigationContainer } from "@react-navigation/native";
import AuthRoutes from "./auth.routes";
import { useAuth } from "../hooks/auth";
import DrawerRoutes from "./drawer.routes";

export default function Routes() {
  const { user, loading } = useAuth();

  return (
    <NavigationContainer>
      {user ? <DrawerRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}
