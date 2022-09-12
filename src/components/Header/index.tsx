import Logo from "../Logo";
import {
  Container,
  Item,
  ItemsContainer,
  LogoContainer,
  Title,
} from "./styles";

export default function () {
  return (
    <Container>
      <LogoContainer>
        <Logo />
        <Title>
          Associação de Moradores <br /> do Taboleiro
        </Title>
      </LogoContainer>
      <ItemsContainer>
        <Item href="#" isActive={true}>
          Início
        </Item>
        <Item href="#">História</Item>
        <Item href="#">Associação</Item>
        <Item href="#">Documentos</Item>
        <Item href="#">Contato</Item>
      </ItemsContainer>
    </Container>
  );
}
