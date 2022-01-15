import React from 'react'
import { ToolbarContainer } from '../styles/components/toolbar'
import Dropdown from './Dropdown'
import SearchBox from './SearchBox'

function ToolBar() {
    return (
        <ToolbarContainer>
            <SearchBox />
            <Dropdown />
        </ToolbarContainer>
    )
}

export default ToolBar
