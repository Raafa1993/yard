import { TouchableOpacityProps } from "react-native";
import { Container } from "./styles";
import { Feather } from "@expo/vector-icons";

interface Props extends TouchableOpacityProps {
  size?: "xs" | "sm" | "md" | "lg";
  variant?: "primary" | "outline";
  icon: React.ComponentProps<typeof Feather>["name"];
}

export default function ButtonIcon({ size, icon, variant, ...rest }: Props) {
  return (
    <Container {...rest} size={size} variant={variant}>
      <Feather name={icon} size={20} color="#fff" />
    </Container>
  );
}
