import {Navbar, Container, Nav, Form, FormControl, Button} from 'react-bootstrap';
import '../App.scss';


function NavBar() {
  
  return (   
    
    <Navbar sticky='top' variant='dark' expand='xl'>
      <Container>
        <Navbar.Brand href="#home">
          <img 
            src="Q2.png"
            width="160"
            height="160"
            className="logo"
            alt=""
          />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/homepage">Home</Nav.Link>
          <Nav.Link href="/likedsongs">Liked Songs</Nav.Link>
          <Nav.Link href="/playlists">Playlist</Nav.Link>
        </Nav>

        <Navbar.Text>
          Signed in as: @sofia
        </Navbar.Text>
      </Container>
    </Navbar>

  
)
}

export default NavBar
