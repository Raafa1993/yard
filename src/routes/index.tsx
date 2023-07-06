import { NavigationContainer } from "@react-navigation/native";
import AuthRoutes from "./auth.routes";
import { useAuth } from "../hooks/auth";
import DrawerRoutes from "./drawer.routes";
import { Loading } from "../components/Loading";

export default function Routes() {
  const { user, loading } = useAuth();

  if (loading) {
    return <Loading />;
  }

  return (
    <NavigationContainer>
      {user ? <DrawerRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}
