import React, {useState} from 'react'
import ReactAudioPlayer from 'react-audio-player';
import { Card, Button, Container } from 'react-bootstrap'
import Banner from './Banner'

function SongCard({ data, deleteSong }) {
    const [liked, setLiked] = useState(false)

    const handleLike = () => {
        setLiked(!liked)
    }
   
    function displayBanner() {
        setTimeout(() => {
        }, 5000)
    }


    return (
        <div className="card-div"> 
        {liked && <Banner toggle={handleLike} />}  
        <Card className='h-100 shadow-lg-white bg-white rounded'>
            <Card.Img variant='top' src={data.image} />
                <Card.Body className='d-flex flex-column'> 
                  <div className="card-block text-center mb-3">
                    <Card.Title className='mb-0 font-weight-bold'>{data.title}</Card.Title>
                  </div>
                  <div className="card-block text-center mb-1">
                    <Card.Subtitle>Artist: {data.artist}</Card.Subtitle>
                  </div>
                  <div className="card-block text-center">
                    <Card.Subtitle>Album: {data.album}</Card.Subtitle>
                  </div> 
                    <Card.Text className="text-secondary">{data.notes}</Card.Text>
                        <div className="align-items-center d-inline-block mt-2">
                            <ReactAudioPlayer
                                src={data.playback}
                                controls
                                style={{ width: '90%' }}
                            />
                        </div>
                        <div className="mt-3 card-block text-center">
                            <Container className='d-flex mb-2 justify-content-center'>
                                <Button 
                                    onClick={handleLike} 
                                    className="mt-auto font-weight-bold"
                                    variant="primary"
                                    block
                                > 
                                {liked ? 'Dislike' : 'Like ♥'} 
                                </Button>
                            </Container>
                        </div>
                        <div className="mt-3 card-block text-center">
                        <Container className='d-flex mb-2 justify-content-center'>
                            <Button 
                                onClick={() => deleteSong(data.id)}
                                className="mt-auto font-weight-bold"
                                variant="primary"
                                block
                            >
                                Delete
                            </Button> 
                        </Container>
                        </div>
                </Card.Body>
        </Card>
        </div>
  );
}

export default SongCard
