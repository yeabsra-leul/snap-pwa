import { React } from 'react';
import { signInWithGoogle } from "./Firebase";
import '../styles/App.css';

export const SignIn = () => {
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

// export default SignIn