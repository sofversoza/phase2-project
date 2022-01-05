// render two buttons login form(renders loginform on click) and sign up form(renders signup form on click)
// render two buttons login form(renders loginform on click) and sign up form(renders signup form on click)
import React from 'react';
import {NavLink} from 'react-router-dom';
function LandingPage() {

  

    return (
        <div>
            <NavLink to='/login' style={{color: "white", textDecoration: 'none', fontSize: '3rem'}}>
                Log In
            </NavLink>
            <br/>
            <NavLink to='/sign-up' style={{color: "white", textDecoration: 'none', fontSize: '3rem'}} >
                Sign Up
            </NavLink>
        </div>
    )
}

export default LandingPage
