// import './App.css';
import './App.scss';
import LandingPage from './components/LandingPage'
import SignUp from './components/SignUp'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import NavBar from './components/NavBar'
import { Route, Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import LikedSongs from './components/LikedSongs'
import Playlists from './components/Playlists'


function App() {
  return (
    <div className="App">
       <header className="App-header">
       <NavBar fixed='top'/>
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

       <Route
       path='/likedsongs'
       element={<LikedSongs />}
       />
        <Route
       path='/playlists'
       element={<Playlists />}
       />
       </Routes>
       </header>
     </div>
  );
}

export default App;
