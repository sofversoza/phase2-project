import {Navbar, Container, Nav, Form, FormControl, Button} from 'react-bootstrap';



function NavBar() {
    return (   
        
    <Navbar bg="dark" variant="dark" fixed='top'>
    <Container>
   
    <Navbar.Brand href="#home">Logo // Current Username</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Liked Songs</Nav.Link>
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
    )
}

export default NavBar
