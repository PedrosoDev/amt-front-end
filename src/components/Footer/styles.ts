import styled, { css } from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  
  margin-top: auto;

  padding: 44px 107px;
  width: 100%;

  background: ${(props) => props.theme.colors.darkBackground};
`;

export const SectionContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
  margin-bottom: 120px;
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleItem = styled.h1`
  font-size: 24px;
  font-weight: 700;

  padding-bottom: 8px;
  margin: 0;
  
  border-bottom: 2px solid white;
  color: ${(props) => props.theme.colors.lightText};
`;

const baseCSS = css`
  margin-top: 16px;
  font-size: 16px;

  color: ${props => props.theme.colors.lightText};
`;

export const TextItem = styled.span`
    ${baseCSS}
`;

export const AnchorItem = styled.a`
  ${baseCSS}

  text-decoration: none;
  
  transition: 0.2s;

  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`;

export const CopyrightText = styled.p`
  font-size: 14px;
  text-align: center;

  color: ${(props) => props.theme.colors.lightText};
  opacity: 0.6;
`;
