import React from 'react'
import axios from 'axios'
import setAuthToken from './utils/setAuthToken'
import { useSelector, useDispatch } from 'react-redux'
import { Route, Routes, Navigate } from 'react-router-dom'
import  { loadUser, login, logout } from './feature/Auth/authSlice'


import './App.scss';

const Nav = React.lazy( () => import('./components/Nav/Nav') )
const Chat = React.lazy( () => import('./components/Chat/Chat') )
const Body = React.lazy( () => import('./components/Body/Body') )
const Journal = React.lazy( () => import('./components/Journal/Journal') )
const Profile = React.lazy( () => import('./components/Profile/Profile') )
const SignUp = React.lazy( () => import('./components/Auth/SignUp/SignUp') )
const SignIn = React.lazy( () => import('./components/Auth/SignIn/SignIn') )
const Travellers = React.lazy( () => import('./components/Travellers/Travellers') )

function App() {
  const dispatch = useDispatch()
  const user = useSelector( state => state.auth.user )
  const tokenState = useSelector( state => state.auth.token )
  const loggedIn = useSelector( state => state.auth.loggedIn )

  const getCurrentUser = async() => {
    // Set token in the header
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    try {
      const res = await axios.get('/user/current')
      // console.log(res.data.user)
      dispatch( loadUser( res.data.user ) )
    } catch ( err ) {
      console.log( err )
      // dispatch( logout() )
    }
  }

  // User needs to be loaded everytime the page changes
  React.useEffect(() => {
    // Only load user if token is detected
    tokenState && getCurrentUser()
    // getCurrentUser()
    
  }, [])

  return (
    <div className="App">
      <React.Suspense fallback="Loading.....">
        <Nav />
        <Body>
          <Routes>
            {/* Auth requrired */}
            <Route exact path="/" element={ !loggedIn ? <Navigate to="/signin" /> : <Journal /> } />
            <Route path="/travellers" element={ !loggedIn ? <Navigate to="/signin" /> : <Travellers /> } />
            <Route path="/chat" element={ !loggedIn ? <Navigate to="/signin" /> : <Chat /> } />
            <Route path="/profile" element={ !loggedIn ? <Navigate to="/signin" /> : <Profile getCurrentUser={ getCurrentUser } /> } />
            {/* No auth required  */}
            <Route path="/signup" element={ <SignUp getCurrentUser={ getCurrentUser } /> } />
            <Route path="/signin" element={ <SignIn getCurrentUser={ getCurrentUser }/> } />
          </Routes>
          
        </Body>
      </React.Suspense>
    </div>
  );
}

export default App;
