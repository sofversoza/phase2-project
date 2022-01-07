//display songs based on search here
import React from 'react'
import SongForm from './SongForm'
import SongCard from './SongCard'
import { Container, Row, Col, Card } from 'react-bootstrap'


function SongPage({ songs, addSongs }) {
    // const mappedSongs = () => {
    //     return songs.map(song => {
    //         return <SongCard song={song} key={song.id}/>
    //     })
    // }

    return (
        <>
            <Container>
            <SongForm addSongs={addSongs}/>
            {/* <Container>
              {mappedSongs()}
            </Container> */}

                {/* {songs.map(song => {
                    return <Row md={4}>
                                <Col className='md-4'>
                                    <SongCard song={song} key={song.id} />
                                </Col>
                            </Row>
                })} */}
            
            </Container>
        </>
    )
}

export default SongPage

// "id": 1,
//         "title": "Lack of Color",
//         "image": "",
//         "artist": "Death Cab for Cutie",
//         "album": "Transatlantacism",
//         "notes"