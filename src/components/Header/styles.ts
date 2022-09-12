import styled from 'styled-components';

interface ItemProps {
    isActive: boolean;
}

export const Container = styled.header`
    display: flex;
    flex-direction: row;
    
    justify-content: space-between;
    align-items: center;

    margin: 24px 16px;
    padding: 16px 8px;

    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15);
    border-radius: 20px;
`;

export const LogoContainer = styled.div`
    display: flex;
    flex-direction: row;

    align-items: center;
`;

export const ItemsContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Item = styled.a.attrs((props: ItemProps) => ({
    isActive: props.isActive || false,
}))`
    font-size: 16px;
    font-weight: ${props => props.isActive ? 700 : 400};

    margin: 0 16px;

    text-decoration: none;
    color: ${props => props.isActive ? props.theme.colors.secondary : props.theme.colors.text};
    transition: .2s;
    
    &:hover {
        color: ${props => props.theme.colors.secondary};
    }


`;

export const Title = styled.h1`
    font-size: 24px;
    font-weight: 400;

    margin-left: 8px;
`;
