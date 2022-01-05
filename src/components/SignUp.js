// user inputs info to create an account 
//once complete routes to Home page
import React from 'react'
import {useNavigate} from 'react-router-dom';

function SignUp() {
    let navigate = useNavigate();

    const handleSignUp = () => {
        navigate('/homepage')
    }
    return (
        <div>
            <header>Sign Up Form</header>
            <input className='sugn-up-form' placeholder='Username'></input>
            <br/>
            <input className='sugn-up-form' placeholder='First Name'></input>
            <br/>
            <input className='sugn-up-form' placeholder='Last Name'></input>
            <br/>
            <input className='sugn-up-form' placeholder='Email'></input>
            <br/>
            <input className='sugn-up-form' placeholder='Password'></input>
            <br/>
            <button className='sugn-up-form' type='submit' onClick={handleSignUp}>Submit</button>
        </div>
    )
}

export default SignUp
