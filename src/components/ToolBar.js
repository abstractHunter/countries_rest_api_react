import React from 'react'
import { ToolbarContainer } from '../styles/components/toolbar'
import Dropdown from './Dropdown'
import SearchBox from './SearchBox'

function ToolBar(props) {
    return (
        <ToolbarContainer>
            <SearchBox searchByName={props.searchByName}/>
            <Dropdown filterByRegion={props.filterByRegion} isSearchingByName={props.isSearchingByName}/>
        </ToolbarContainer>
    )
}

export default ToolBar
