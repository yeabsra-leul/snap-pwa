import Sidebar from '../components/Sidebar';
import { Settings_Preferences } from '../components/Settings_Preferences';
import { Settings_Routines } from '../components/Settings_Routines';

const custom_css = `
    .container {
        padding: 28px;
    }
`

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
                <Settings_Preferences />
                <Settings_Routines />
            </main>
        </>
    )
}

export default Settings;