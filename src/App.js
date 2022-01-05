import logo from './logo.svg';
import './App.css';
import LandingPage from './components/LandingPage'
import SignUp from './components/SignUp'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import { Route, Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
//rfce = create starter component
//'react-router-dom' router import path

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Routes> 
      <Route 
      path='/sign-up'
      element={<SignUp />} /> 
      
      <Route 
      path='/login'
      element={<LoginForm/>} /> 
     
      <Route 
      path='/'
      element={<LandingPage />} />
     
      <Route 
      path='/homepage' 
      element={<Home />}
      />
      </Routes>
      

      
     
      
     


       {/* <LandingPage />
       <SignUp />
       <LoginForm /> */}
      </header>
    </div>
  );
}

export default App;
