import React from 'react';
import {NavLink} from 'react-router-dom';
import { Figure, Button, Container } from 'react-bootstrap'



function LandingPage() {

    return (
        <Container id="landing-page" className='d-grid h-100'>
            <Figure className="text-center w-100">
                <Figure.Image
                        className="landingpage-logo"
                        width="350"
                        height="280"
                        alt=""
                        src="Q2.png" 
                    />
            </Figure>
            <h1 className="landingpage-title">Q Music Player & Blog</h1>
            <h3 className="landingpage-subtitle">Your Thoughts On Your Favorite Music All In One Place</h3> 
           <NavLink  to='/login' className='btn btn-primary btn-lg' id='loginpage-btn'>
                Sign in
            </NavLink>
        </Container>
    )
}


export default LandingPage
