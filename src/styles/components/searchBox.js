import styled from "styled-components";

export const SearchContainer = styled.div`
    height: 100%;
    
`;

export const SearchButton = styled.button`
    background-color:  ${props => props.theme.componentBackground};
    color: ${props => props.theme.fontColor};
    border: none;
    border-radius: 5px 0px 0px 5px;
    height: 100%;
    width: 40px;
    font-size: 16px;
    cursor: pointer;
`;

export const SearchInput = styled.input`
    background-color:  ${props => props.theme.componentBackground};
    color: ${props => props.theme.fontColor};
    border: none;
    border-radius: 0px 5px 5px 0px;
    font-size: 16px;
    width: 300px;
    height: 100%;

    :focus {
        outline: none;
    }
`;