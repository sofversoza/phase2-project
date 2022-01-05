import React, {useState} from 'react'
import SearchPage from './SearchPage'

function SearchBar() {
    const [searchInput, setSearchInput] = useState('')

    const handleSearchPageView = (e) => {
        setSearchInput(e.target.value)
        console.log(e.target.value)
    }
    return (
        <div>
            <input className='search' placeholder='Search Songs' onChange={handleSearchPageView}></input>
            <button className='search' >Search</button>
            {searchInput ? <SearchPage /> : null}
        </div>
    )
}

export default SearchBar
