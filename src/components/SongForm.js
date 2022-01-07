import React, {useState} from 'react'
import { Form, InputGroup, FormControl, Button, Container, Row, Col } from 'react-bootstrap'


function SongForm({addSongs}) {
    const [formView, setFormView] = useState(true)
    const [formData, setFormData] = useState({
        title: '',
        artist: '',
        album: '',
        image: '',
        notes: '',
        playback: ''
    })

    const toggleFormView = () => {
        setFormView(!formView)
    }

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addSongs(formData)
        
    }

   return (
       <>
       {/* <div>
             <form onSubmit={handleSubmit}>
                 <input className='song' 
            name='title' 
            placeholder='Song Title'
            value={formData.title}
            onChange={handleChange}
            >
            </input>
            <br/>
            <input className='song' 
            name='artist' 
            placeholder='Artist'
            value={formData.artist}
            onChange={handleChange}>
            </input>
            <br/>
            <input className='song' 
            name='album' 
            placeholder='Album'
            value={formData.album}
            onChange={handleChange}></input>
            <br/>
            <input className='song' 
            name='image' 
            placeholder='Album Image Url'
            value={formData.image}
            onChange={handleChange}></input>
            <br/>
            <input className='song' 
            name='notes' 
            placeholder='Blog'
            value={formData.notes}
            onChange={handleChange}></input>
            <br/>
            <input className='song' 
            name='notes' 
            placeholder='Upload File'
            value={formData.playback}
            onChange={handleChange}></input>
            <br/>
            <button className='song' 
            type='submit' >Submit</button>
            </form> 
        </div> */}
        
        <Container>
            <Form id="main-loginform" className="text-center w-100" onSubmit={handleSubmit}> 
            <Container style={{ backgroundColor: 'white', padding: '30px', borderRadius: '10px', boxShadow: '0 0 15px #FFFFFF' }}>
                    <Form.Group className="text-center w-100" controlId="formSongs">
                        <Form.Control  
                            className="song"
                            name='title' 
                            placeholder="Song Title" 
                            value={formData.title}
                            onChange={handleChange}
                        /> 
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="formSongs">
                        <Form.Control  
                           className="song"
                           name='album' 
                           placeholder="Album" 
                           value={formData.album}
                           onChange={handleChange}
                        /> 
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="formSongs">
                        <Form.Control  
                           className="song"
                           name='image' 
                           placeholder="Album Image URL" 
                           value={formData.image}
                           onChange={handleChange}
                        /> 
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="formSongs">
                        <Form.Control  
                           className="song"
                           name='notes' 
                           placeholder="Notes" 
                           value={formData.notes}
                           onChange={handleChange}
                        /> 
                    </Form.Group>
                    <Button className='song' type="submit" >
                        Submit
                    </Button>
               </Container>
            </Form>   
        </Container>
        </>
    )
}

export default SongForm
// "title": "Lack of Color",
//       "image": "Images/folder.jpg",
//       "artist": "Death Cab for Cutie",
//       "album": "Transatlantacism",
//       "notes"