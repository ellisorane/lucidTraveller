import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.scss';

const Nav = React.lazy( () => import('./components/Nav/Nav') )
const Body = React.lazy( () => import('./components/Body/Body') )
const Journal = React.lazy( () => import('./components/Journal/Journal') )
const Travellers = React.lazy( () => import('./components/Travellers/Travellers') )
const Chat = React.lazy( () => import('./components/Chat/Chat') )
const Profile = React.lazy( () => import('./components/Profile/Profile') )
const SignUp = React.lazy( () => import('./components/SignUp/SignUp') )
const SignIn = React.lazy( () => import('./components/SignIn/SignIn') )

function App() {
  return (
    <div className="App">
      <React.Suspense fallback="Loading.....">
        <Nav />
        <Body>
          <Routes>
            <Route exact path="/" element={ <Journal /> } />
            <Route path="/travellers" element={ <Travellers /> } />
            <Route path="/chat" element={ <Chat /> } />
            <Route path="/profile" element={ <Profile /> } />
            <Route path="/signup" element={ <SignUp /> } />
            <Route path="/signIn" element={ <SignIn /> } />
          </Routes>
          
        </Body>
      </React.Suspense>
    </div>
  );
}

export default App;
