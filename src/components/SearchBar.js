import React, {useState} from 'react'


function SearchBar({ setSearch }) {
    
    const handleSearch = (e) => {
        console.log(e.target.value)
         setSearch(e.target.value)
    }

    return (
        <div>
            <input className='search' 
            placeholder='Search Songs' 
            onChange={handleSearch}></input>
        </div>
    )
}

export default SearchBar;
