import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  
  margin-top: auto;

  padding: 44px 107px;
  width: 100%;

  background: ${(props) => props.theme.colors.darkBackground};

  span {
    font-size: 14px;
    text-align: center;

    color: ${(props) => props.theme.colors.lightText};
    opacity: 0.6;
  }
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

  h1 {
    font-size: 24px;
    font-weight: 700;

    padding-bottom: 8px;
    margin: 0;
    
    border-bottom: 2px solid white;
    color: ${(props) => props.theme.colors.lightText};
  }

  a, span {
    margin-top: 16px;
    font-size: 16px;
    text-align: left;

    color: ${props => props.theme.colors.lightText};  
  }

  a {
    text-decoration: none;
  
    transition: 0.2s;

    &:hover {
      color: ${(props) => props.theme.colors.primary};
    }
  }
`;
