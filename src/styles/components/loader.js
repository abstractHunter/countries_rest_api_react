import styled from "styled-components";

export const Loader = styled.div`
    height: 50px;
    width: 100px;
    background-color: ${props => props.theme.componentBackground};
    animation: spin 3s linear infinite;
    align-self: center;
    margin: 100px;

    @keyframes spin {
        from {transform:rotate(0deg);}
        to {transform:rotate(360deg);}
    }
`;
