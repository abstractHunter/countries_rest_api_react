import React from 'react'
import { SearchButton, SearchContainer, SearchInput } from '../styles/components/searchBox'

function SearchBox() {
    return (
        <SearchContainer>
            <SearchButton>go</SearchButton>
            <SearchInput type="text" placeholder="Search.." name="search" />
        </SearchContainer>
    )
}

export default SearchBox
