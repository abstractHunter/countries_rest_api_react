import React from 'react'
import {
    CardContainer, Flag, Infos, Name, OtherInfo, OtherInfoKey, OtherInfoValue
} from '../styles/components/card'

function Card(props) {

    const country = props.country

    return (
        <CardContainer>
            <Flag src={country.flags.png} alt={country.name.common}></Flag>
            <Infos>
                <Name>{country.name.common}</Name>
                <OtherInfo>
                    <OtherInfoKey>Population : </OtherInfoKey>
                    <OtherInfoValue>{country.population}</OtherInfoValue>
                </OtherInfo>
                <OtherInfo>
                    <OtherInfoKey>Region : </OtherInfoKey>
                    <OtherInfoValue>{country.region}</OtherInfoValue>
                </OtherInfo>
                <OtherInfo>
                    <OtherInfoKey>Capital : </OtherInfoKey>
                    <OtherInfoValue>{country.capital}</OtherInfoValue>
                </OtherInfo>
            </Infos>
        </CardContainer>
    )
}

export default Card
