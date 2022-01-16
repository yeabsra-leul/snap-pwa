import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithRedirect, signInWithPopup, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyANfoLDGZsVAl8NwHJUlgLrUynJJMaSsg0",
  authDomain: "auth-8b1ef.firebaseapp.com",
  projectId: "auth-8b1ef",
  storageBucket: "auth-8b1ef.appspot.com",
  messagingSenderId: "445273762769",
  appId: "1:445273762769:web:81f403cae7cb5fe3760ef0",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)    // TODO: DECIDE BETWEEN SIGN IN WITH POPUP OR REDIRECT
    .then((result) => {
      const name = result.user.displayName.split(' ')[0]
      const email = result.user.email
      const profilePic = result.user.photoURL   // NOT SURE IF WE NEED THE PICTURE..

      localStorage.setItem("name", name)   // TODO: CURRENTLY STORING USER DATA IN LOCAL STORAGE, MOVE TO DATABASE
      localStorage.setItem("email", email)
      localStorage.setItem("profilePic", profilePic)
    })
    .catch((error) => {
      console.log(error)
    })
}

export const signOutWithGoogle = () => {
  signOut(auth)
    .then(() => { }
    )
    .catch((error) => {
      console.log(error)
  })
}