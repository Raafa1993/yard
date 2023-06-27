import { useState } from "react";
import { ThemeProvider } from "styled-components";
import Routes from "./src/routes";
import light from "./src/theme/light";
import { SignIn } from "./src/screens/SignIn";

export default function App() {
  const [user, setUser] = useState<null | boolean>(false);

  return (
    <ThemeProvider theme={light}>
      {user ? <Routes /> : <SignIn />}
      
    </ThemeProvider>
  );
}
