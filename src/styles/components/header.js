import styled from "styled-components";

export const HeaderContainer = styled.div`
    background-color: ${props => props.theme.componentBackground};
    height: 60px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5%;
`;

export const HeaderTitle = styled.h1`
    font-size: 20px;
`;

export const HeaderThemeSwitcher = styled.div`
    
`;