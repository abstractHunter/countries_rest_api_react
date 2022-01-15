import styled from "styled-components";

export const Page = styled.div`
    padding: 40px 5%;
    min-height: calc(100vh - 60px);
    width: 100%;
    background-color: ${props => props.theme.body}
`;
