import Logo from "../Logo";
import {
  Container,
  ItemsContainer,
  LogoContainer
} from "./styles";

export default function () {
  return (
    <Container>
      <LogoContainer>
        <Logo />
        <h1>
          Associação de Moradores <br /> do Taboleiro
        </h1>
      </LogoContainer>
      <ItemsContainer>
        <a href="#" className="active">
          Início
        </a>
        <a href="#">História</a>
        <a href="#">Associação</a>
        <a href="#">Documentos</a>
        <a href="#">Contato</a>
      </ItemsContainer>
    </Container>
  );
}
