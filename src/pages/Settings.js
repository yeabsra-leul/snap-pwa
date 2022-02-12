import Sidebar from '../components/Sidebar';
import { Routines, Preferences } from '../components/SettingPersistence';

const custom_css = ` .container { padding: 28px; } `

function Settings() {
    if ((JSON.parse(localStorage.getItem("settings")))===null) {
        let settings = {
            reminders: true,
            sounds: true,
            routines: []
        }
        localStorage.setItem("settings", JSON.stringify(settings))    
    }

    return (
        <>
            <header>
                <style>{custom_css}</style>
                <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
                <div className="container" />                
            </header>

            <main className="container">
                <Preferences />
                <Routines />
            </main>
        </>
    )
}

export default Settings;