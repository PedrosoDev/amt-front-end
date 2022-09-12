import styled from "styled-components";

export const Container = styled.main`
  margin: 0 109px;
`;

export const SectionContainer = styled.section`
    display: grid;
    grid-template-columns: repeat(3, auto);
    column-gap: 24px;
    row-gap: 24px;

    height: fit-content;
    width: fit-content;
    margin-top: 54px;
    margin: 0 auto;
    padding: 32px 16px;
`;

export const Title = styled.h1`
    grid-column: 1 / 4 ;
    font-size: 40px;
    font-weight: 400;
    text-align: center;

    margin-bottom: 16px;

    color: ${props => props.theme.colors.text};
`;

export const NoticeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-self: center;

    height: 100%;
    width: 100%;
    padding: 16px;
    border-radius: 20px;

    background: ${props => props.theme.colors.background};
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);
`;

export const NoticeImage = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 5px;
`;

export const NoticeDate = styled.span`
    font-size: 12px;
    font-weight: 500;
    margin: 8px 0;

    color: ${props => props.theme.colors.secondary};
`;

export const NoticeTitle = styled.h2`
    font-size: 20px;
    font-weight: 400;
    text-align: center;
    
    margin: 0;
    color: ${props => props.theme.colors.text};
`;

export const AssociateContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-self: center;
`;

export const AssociateImage = styled.img`
    height: 10vw;
    width: 10vw;
    border-radius: 50%;

    object-fit: cover;
`;

export const AssociateTitle = styled.h2`
    font-size: 20px;
    font-weight: 400;
    text-align: center;
    
    margin: 0;
    color: ${props => props.theme.colors.text};
`;

export const NewsLetterContainer = styled.section`
`;