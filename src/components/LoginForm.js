// user inputs info to login 
//once complete routes to Home page
import React from 'react'
import {useNavigate} from 'react-router-dom';
import { Form, InputGroup, FormControl, Button, Container, Row, Col } from 'react-bootstrap'


function LoginForm() {
    let navigate = useNavigate();

    const handleLogin = () => {
        navigate('/homepage');
    }
  
    return (
        <Container id='login-form' className='d-grid h-100'>
            <Form id="main-loginform" className="text-center w-100">
                <Container style={{ backgroundColor: 'white', padding: '30px', borderRadius: '10px', boxShadow: '0 0 15px #FFFFFF' }}>
                    <Form.Group className="mb-4" controlId="formBasicEmail">
                        <InputGroup className="mb-3" size='default'>
                            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                            <FormControl
                            placeholder="Username"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                        <Form.Control type="email" placeholder="Email Address" />
                    </Form.Group>
                <Button className='btn' type="submit" onClick={handleLogin} >
                    Sign in
                </Button>
               </Container>
            </Form>
        </Container>
    )
}

export default LoginForm
