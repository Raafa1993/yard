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
import dark from "./src/theme/dark";
import { Loading } from "./src/components/Loading";
import AppProvider from "./src/hooks";
import { useThemeStore } from "./store/theme";

export default function App() {
  const { theme } = useThemeStore();
  const [hasLoadedFonts] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  const isDark = theme === "light" ? light : dark;

  console.log(theme);

  return (
    <AppProvider>
      <ThemeProvider theme={isDark}>
        {hasLoadedFonts ? <Routes /> : <Loading />}
      </ThemeProvider>
    </AppProvider>
  );
}
