import React, {useState} from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
// import '../styles/App.css';
// import { signInWithGoogle } from "./Firebase";
import SignIn from './SignIn'
import Home from './Home'
import {onAuthStateChanged, getAuth} from 'firebase/auth'

function App() {
  const [isUserSignedIn, setIsUserSignedIn] = useState(true)
  const auth = getAuth()
  onAuthStateChanged(auth, (user) => {
    // if(user) {
    //   return setIsUserSignedIn(true);
    // }
    // setIsUserSignedIn(false);
    return setIsUserSignedIn(user)
  })

  if (isUserSignedIn) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    );
  } else {
      return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignIn />} />
          </Routes>
      </BrowserRouter>
      )
  }

}

export default App;
