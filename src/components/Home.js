//parent container of most of the the functioning app
import React from 'react'
import SearchBar from './SearchBar'
import NavBar from './NavBar'

function Home() {
    return (
        <div>
            <NavBar fixed="top"/>
            <SearchBar />
        </div>
    )
}

export default Home
