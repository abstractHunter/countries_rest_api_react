import React, { useState } from 'react'
import {
    DropdownButton,
    DropdownContainer,
    DropdownList,
    DropdownListItem,
} from '../styles/components/dropdown'


const regions = [
    {
        id: 1,
        name: "All countries",
    },
    {
        id: 2,
        name: "Africa",
    },
    {
        id: 3,
        name: "Americas",
    },
    {
        id: 4,
        name: "Asia",
    },
    {
        id: 5,
        name: "Europe",
    },
    {
        id: 6,
        name: "Oceania",
    },
]


function Dropdown(props) {

    const [show, setShow] = useState(false)
    const [region, setRegion] = useState("Africa")

    /* if (props.isSearchingByName) {
        setRegion("All countries")
    } */

    const toggleShow = () => {
        if (show) {
            setShow(false)
        }
        else {
            setShow(true)
        }
    }

    const changeTitle = (continent) => {
        setRegion(continent);
        props.filterByRegion(continent)
        setShow(false)
    }

    return (
        <DropdownContainer>
            <DropdownButton onClick={() => toggleShow()}>
                {region}
            </DropdownButton>

            {
                show && (
                    <DropdownList>
                        {regions.map((item, key) => {
                            return (
                                <DropdownListItem
                                    key={key}
                                    onClick={() => changeTitle(item.name)}
                                >
                                    {item.name}
                                </DropdownListItem>
                            )
                        })}
                    </DropdownList>
                )
            }

        </DropdownContainer>
    )
}

export default Dropdown
