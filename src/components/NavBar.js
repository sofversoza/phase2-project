
import {Navbar, Container, Nav, Form, FormControl, Button} from 'react-bootstrap';



function NavBar() {
    return (   
   <>       
      <Navbar bg="black" variant="dark" fixed='top' className="navbar">
        <Container>
          <Navbar.Brand href="#home">
            <img 
              src="Q.png"
              width="200"
              height="200"
              className="logo"
              alt=""
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Songs</Nav.Link>
            <Nav.Link href="#pricing">Playlists</Nav.Link>
          </Nav>
    
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar

