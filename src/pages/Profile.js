import React from "react";
import Sidebar from '../components/Sidebar';
import { signOutWithGoogle } from "../components/Firebase";
import '../styles/profile.css';

const custom_css = ` .container { padding: 28px; } `

export default function Profile() {
    var info = JSON.parse(localStorage.getItem("userInfo"));
    var name = info.name;
    var pic = info.profilePic || require("../images/default_profile.jpg");

    return (
        <>
            <header>
                <style>{custom_css}</style>
                <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
                <div className="container" />                
            </header>

            <main>
                <div className="logout-button-container">
                    <button type="button" className='btn btn__img profile-logout' onClick={signOutWithGoogle}>Sign Out</button>
                </div>

                <div className="profile-picture-container">
                    <img src={pic} alt="Picture" className="profile-picture"/>
                </div>

                <div className="name-container">
                    {name}
                </div>
            </main>
        </>
    )
}