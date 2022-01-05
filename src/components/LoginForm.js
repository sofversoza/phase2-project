// user inputs info to login 
//once complete routes to Home page
import React from 'react'
import {useNavigate} from 'react-router-dom';

function LoginForm() {
    let navigate = useNavigate();

    const handleLogin = () => {
        navigate('/homepage');
    }
  
    return (
        <div>
            <header>Log In Form</header>
            <input className='login-form' placeholder='Username'></input>
            <br/>
            <input className='login-form' placeholder='Password'></input>
            <br/>
            <button className='login-form' type='submit' onClick={handleLogin}>Submit</button>
        </div>
    )
}

export default LoginForm
