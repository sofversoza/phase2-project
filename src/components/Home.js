//parent container of most of the the functioning app
import React, {useState, useEffect } from 'react'
import SongForm from './SongForm'
import SongCard from './SongCard'
import SearchBar from './SearchBar'
import { Container, Row, Col, Button } from 'react-bootstrap'


function Home() {
    const SongUrl = "http://localhost:6001/songs/"
    const [songs, setSongs] = useState([])
    // const [search, setSearch] = useState('')
    const [formView, setFormView] = useState(false)
    
    useEffect(() =>{
        fetch(SongUrl)
        .then(res => res.json())
        .then(data => setSongs(data))
    },[])
    
    const addSongs = (formData) => {
    const postObj = {
        method: "POST",
        headers: {
            "content-type" : "application/json"
        },
        body: JSON.stringify(formData),
    }

    fetch(SongUrl, postObj).then(res => res.json()).then((newSong) => {
        console.log('new Song', newSong)
        setSongs([newSong, ...songs])
        
    }) 
    }

    const toggleFormView = () => {
        setFormView(!formView)
    }

    function deleteSong(id) {
        fetch(`http://localhost:6001/songs/${id}`, {
            method: "DELETE",
        })
        .then(() => {
            setSongs(songs.filter(track => track.id !== id))
        })
    }

    // const filteredSongs = () => {
    //     return songs.filter(song => {
    //         return song.title.toLowerCase().includes(search.toLowerCase())
    //     })
    // }


    return (
        <>
            {/* <button onClick={toggleFormView}>{formView? 'hide form' : 'show form'}</button> */}
            {formView ? <SongForm addSongs={addSongs}/> : null}
            <Button onClick={toggleFormView} >
                {formView? 'hide form' : 'show form'}
            </Button>
            {/* <SearchBar setSearch={setSearch} /> */}
            <Container>
                <Row>
                    {songs.map(data => (
                        <Col xs={3} className="mb-5" key={`${data.id}`}>
                            <SongCard deleteSong={deleteSong} data={data} />
                        </Col>
                    ))}
                </Row>
           </Container> 
        </>
    )
}

export default Home
