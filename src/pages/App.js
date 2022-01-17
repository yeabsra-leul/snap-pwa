import { React, useState } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { onAuthStateChanged, getAuth } from 'firebase/auth'
import { Home } from './Home';
import { SignIn } from './SignIn';

function App() {
  const [isUserSignedIn, setIsUserSignedIn] = useState(true)
  const auth = getAuth()
  onAuthStateChanged(auth, (user) => { setIsUserSignedIn(user) })

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
