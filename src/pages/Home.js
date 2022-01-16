import React from 'react';
import '../styles/App.css';
import { signOutWithGoogle } from "./Firebase";

const Home = () => {
    return (
        <>
            <div className="App">
                <header className="App-header">
                    <h1>*Home page*</h1>
                    <h2>Welcome to Snap, {localStorage.getItem("name")}!</h2>
                    <button class="google-btn sign-out-btn" onClick={signOutWithGoogle}>
                        Sign Out
                    </button>
                </header>
            </div>
        </>
    )
}

export default Home