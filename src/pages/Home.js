import { React } from 'react';
import { signOutWithGoogle } from "./Firebase";
import '../styles/App.css';

export const Home = () => {
    return (
        <>
            <div className="App">
                <header className="App-header">
                    <h1>*Home page*</h1>
                    <h2>Welcome to Snap, {localStorage.getItem("name").split(' ')[0]}!</h2>
                    <button class="google-btn sign-out-btn" onClick={signOutWithGoogle}>
                        Sign Out
                    </button>
                </header>
            </div>
        </>
    )
}