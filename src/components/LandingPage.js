// render two buttons login form(renders loginform on click) and sign up form(renders signup form on click)
// render two buttons login form(renders loginform on click) and sign up form(renders signup form on click)
import React from 'react';
import {NavLink} from 'react-router-dom';
import {Container} from 'react-bootstrap'


function LandingPage() {

    const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=bb70477ae18942578967a97b35b07207&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

    return (
        <div>

            <Container>
                <a className='btn btn-success btn-lg' href={AUTH_URL}>
                    Login
                </a>
            </Container>



{/* 
            <NavLink  to='/login' style={{color: "white", textDecoration: 'none', fontSize: '3rem'}}>
                Log In
            </NavLink>
            <br/>
            <NavLink to='/sign-up' style={{color: "white", textDecoration: 'none', fontSize: '3rem'}} >
                Sign Up
            </NavLink> */}
        </div>
    )
}

export default LandingPage
