import { TouchableOpacityProps } from "react-native";
import { Container, Title } from "./styles";

interface Props extends TouchableOpacityProps {
  text: string;
  isActive?: boolean;
  type: "remocao" | "vmc";
}

export default function ButtonFilter({ text, isActive, type, ...rest }: Props) {
  return (
    <Container isActive={isActive} type={type} {...rest}>
      <Title isActive={isActive} type={type}>
        {text}
      </Title>
    </Container>
  );
}
