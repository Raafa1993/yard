import { TouchableOpacityProps } from "react-native";
import { Container, Title } from "./styles";

interface Props extends TouchableOpacityProps {
  text: string;
}

export default function Button({ text, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Title>{text}</Title>
    </Container>
  );
}
