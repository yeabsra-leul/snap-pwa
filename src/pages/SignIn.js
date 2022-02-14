import { React } from 'react';
import { signInWithGoogle } from "../components/Firebase";
import '../styles/signin.css';
import logo from '../images/logo.png';

export const SignIn = () => {
    return (
        <>
            {/* <div className="App">
                <header className="App-header">
                    <h1>Welcome to Snap!</h1>
                    <button className="google-btn sign-in-btn" onClick={signInWithGoogle}>
                        Sign in with Google
                    </button>
                </header>
            </div> */}
            <div className="background">
                <div className='logo-container'>
                    <img className="logo" src={logo} />
                </div>

                <div className="custom-shape-divider-bottom-1644866919">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                    </svg>
                </div>

        {/* <img class="wave" src="waves 1.png"> */}
            </div>

            <div className="foreground">
                <button className="google-btn sign-in-btn" onClick={signInWithGoogle}>
                    <a className='signin-button'>Sign In</a>
                </button>
            </div>
        </>
    )
}