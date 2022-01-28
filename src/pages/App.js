import { React, useState } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { Home } from './Home';
import { SignIn } from './SignIn';
import Schedules from './Schedules';
import Settings from './Settings';

function App() {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false)
  const auth = getAuth()
  onAuthStateChanged(auth, (user) => { setIsUserSignedIn(user) })

  if (isUserSignedIn) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/schedules" element={<Schedules />} />
          <Route path="/settings" element={<Settings />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    )
  } else {
      return (
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<SignIn />} />   
            {/* <Route path="/">
              <Route path="schedules" element={<Schedules/>} />
            </Route>*/}
          </Routes>
      </BrowserRouter>
      )
  }
}

export default App;