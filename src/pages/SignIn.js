import React from 'react';
import '../styles/App.css';
import { signInWithGoogle } from "./Firebase";

const SignIn = () => {
    return (
        <>
            <div className="App">
                <header className="App-header">
                    <h1>Welcome to Snap!</h1>
                    <button class="google-btn sign-in-btn" onClick={signInWithGoogle}>
                        Sign in with Google
                   </button>
                </header>
            </div>
        </>
    )
}

export default SignIn