import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
  Inter_600SemiBold,
} from "@expo-google-fonts/inter";

import { ThemeProvider } from "styled-components";
import Routes from "./src/routes";
import light from "./src/theme/light";
import { Loading } from "./src/components/Loading";
import AppProvider from "./src/hooks";

export default function App() {
  const [hasLoadedFonts] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  return (
    <AppProvider>
      <ThemeProvider theme={light}>
        {hasLoadedFonts ? <Routes /> : <Loading />}
      </ThemeProvider>
    </AppProvider>
  );
}
