import logo from './logo.svg';
import './App.css';
import LandingPage from './components/LandingPage'
import SignUp from './components/SignUp'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import { Route, Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/Dashboard'
//rfce = create starter component
//'react-router-dom' router import path

// Here we are getting the code from our url which is used for our authorization we convert this code to a token
const code = new URLSearchParams(window.location.search).get('code')



function App() {
  return (
      code ? <Home code={code} /> : <LandingPage />
    

    // <div className="App">
    //    <header className="App-header">

    //   <Routes> 
    //   <Route 
    //    path='/sign-up'
    //    element={<SignUp />} /> 
      
    //    <Route 
    //    path='/login'
    //    element={<LoginForm/>} /> 
     
    //    <Route 
    //    path='/'
    //    element={<LandingPage />} />
     
    //    <Route 
    //    path='/homepage' 
    //    element={<Home />}
    //    />
    //    </Routes>
      
    //    /* <LandingPage />
    //    <SignUp />
    //    <LoginForm /> */
    //    </header>
    //  </div>
  );
}

export default App;
