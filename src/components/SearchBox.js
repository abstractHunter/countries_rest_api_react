import React, {useState} from 'react'
import { SearchButton, SearchContainer, SearchInput } from '../styles/components/searchBox'

function SearchBox(props) {

    const [search, setSearch] = useState("");

    function textChanged(e) {
        setSearch(e.target.value)
        props.searchByName(search)
    }

    return (
        <SearchContainer>
            <SearchButton>go</SearchButton>
            <SearchInput 
                type="text"
                placeholder="Search.." 
                name="search" 
                onChange={textChanged}
            />
        </SearchContainer>
    )
}

export default SearchBox
