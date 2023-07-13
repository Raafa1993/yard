import { TouchableOpacityProps } from "react-native";
import { Container, Title } from "./styles";

interface Props extends TouchableOpacityProps {
  text: string;
  size?: "xs" | "sm" | "md" | "lg";
  variant?: "primary" | "outline";
}

export default function Button({ text, size, variant, ...rest }: Props) {
  return (
    <Container {...rest} size={size} variant={variant}>
      <Title size={size}>{text}</Title>
    </Container>
  );
}
