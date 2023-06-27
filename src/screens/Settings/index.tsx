import React from "react";

import { Container } from "./styles";
import Button from "../../components/Button";
import { useAuth } from "../../hooks/auth";

export function Settings() {
  const { signOut } = useAuth();

  const handleOnLogout = () => {
    signOut();
  };

  return (
    <Container>
      <Button onPress={() => handleOnLogout()} text="Logout" />
    </Container>
  );
}
