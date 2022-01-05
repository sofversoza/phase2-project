import '../App.css';
import LandingPage from './LandingPage'
import SignUp from './SignUp'
import LoginForm from './LoginForm'
import Home from './Home'
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
