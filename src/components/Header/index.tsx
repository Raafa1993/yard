import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

interface HeaderProps {
  title: string;
}

import { Container, ButtonBack, Text } from "./styles";

export function Header({ title }: HeaderProps) {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Container>
      <ButtonBack onPress={handleGoBack}>
        <Feather name="arrow-left" color="#D0D5DD" size={24} />
      </ButtonBack>

      <Text>{title}</Text>
    </Container>
  );
}
