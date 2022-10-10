import {
  FooterContainer,
  SectionContainer,
  ItemContainer,
} from "./styles";

export default function () {
  return (
    <FooterContainer>
      <SectionContainer>
        <ItemContainer>
          <h1>Mapa do Site</h1>

          <a href="/inicio">Início</a>
          <a href="#">História</a>
        </ItemContainer>

        <ItemContainer>
          <h1>Onde Estamos</h1>

          <span>Rua São João, 4265, Quadra 6, São José</span>
          <span>Balneário Camboriú - SC</span>
          <span>CEP 88380-000</span>
        </ItemContainer>

        <ItemContainer>
          <h1>Conecte-se Conosco</h1>

          <span>(48) 98594-9250</span>
          <span>thuhang.nute@gmail.com</span>
          <span>Icones Redes Sociais</span>
        </ItemContainer>
      </SectionContainer>
      <span>
        Associação de Moradores do Taboleiro ©{" "}
        {new Date(Date.now()).getFullYear()} - Todos os Direitos Reservados |
        Criado por LabMat(i)², Powered by Instituto Federal Catarinense - Campus
        Camboriú
      </span>
    </FooterContainer>
  );
}
