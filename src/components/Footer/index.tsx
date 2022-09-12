import {
  FooterContainer,
  CopyrightText,
  SectionContainer,
  ItemContainer,
  TitleItem,
  AnchorItem,
  TextItem,
} from "./styles";

export default function () {
  return (
    <FooterContainer>
      <SectionContainer>
        <ItemContainer>
          <TitleItem>Mapa do Site</TitleItem>

          <AnchorItem href="/inicio">Início</AnchorItem>
          <AnchorItem href="#">História</AnchorItem>
        </ItemContainer>

        <ItemContainer>
          <TitleItem>Onde Estamos</TitleItem>

          <TextItem>Rua São João, 4265, Quadra 6, São José</TextItem>
          <TextItem>Balneário Camboriú - SC</TextItem>
          <TextItem>CEP 88380-000</TextItem>
        </ItemContainer>

        <ItemContainer>
          <TitleItem>Conecte-se Conosco</TitleItem>

          <TextItem>(48) 98594-9250</TextItem>
          <TextItem>thuhang.nute@gmail.com</TextItem>
          <TextItem>Icones Redes Sociais</TextItem>
        </ItemContainer>
      </SectionContainer>
      <CopyrightText>
        Associação de Moradores do Taboleiro ©{" "}
        {new Date(Date.now()).getFullYear()} - Todos os Direitos Reservados |
        Criado por LabMat(i)² | Powered by Instituto Federal Catarinense -
        Campus Camboriú
      </CopyrightText>
    </FooterContainer>
  );
}
