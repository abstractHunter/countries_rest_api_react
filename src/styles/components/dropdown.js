import styled from "styled-components";

export const DropdownContainer = styled.div`
    position: relative;
    display: inline-block;
`;
    
export const DropdownButton = styled.button`
    width: 150px;
    height: 100%;
    background-color: ${props => props.theme.componentBackground};
    color: ${props => props.theme.fontColor};
    font-size: 18px;
    border-radius: 5px;
    border: none;
    cursor: pointer;

    :hover {
        background-color: ${props => props.theme.body};
        border: 3px solid ${props => props.theme.componentBackground};
    }
`;

export const DropdownList = styled.div`
    position: absolute;
    background-color: ${props => props.theme.componentBackground};
    width: 100%;
    overflow-auto;
    margin-top: 8px;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
`;

export const DropdownListItem = styled.a`
    color:  ${props => props.theme.fontColor};
    padding: 8px 16px;
    text-decoration: none;
    cursor: pointer;
    display: block;

    :hover {
        background-color: ${props => props.theme.body};
    }
`;
