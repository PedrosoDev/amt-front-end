import styled from 'styled-components';

export default styled.button.attrs({
  styled: "Text" || "Outline" || "Normal",
})`
  background: ${props => props.styled != "Normal" ? "transparent" : props.theme.colors.primary};
  color: ${props => props.styled == "Normal" ? props.theme.colors.text : props.theme.colors.primary};
  border: ${props => props.styled == "Outline" ? `1px solid ${props.theme.colors.text}` : "none"};
`;

