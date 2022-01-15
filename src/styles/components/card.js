import styled from "styled-components";

export const CardContainer = styled.div`
    height: 350px;
    width: 260px;
    background-color: ${props => props.theme.componentBackground};
    border-radius: 10px;
    margin: 20px;
`;

export const Flag = styled.img`
    height: 150px;
    width: 100%;
    border-radius: 10px 10px 0px 0px
`;

export const Infos = styled.div`
    padding: 8%;
`;

export const Name = styled.h3`
    
`;

export const OtherInfo = styled.div`
    margin-top: 15px;
`;

export const OtherInfoKey = styled.span`
    font-weight: bold;
`;

export const OtherInfoValue = styled.span`

`;