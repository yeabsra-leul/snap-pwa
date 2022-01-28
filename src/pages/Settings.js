import Sidebar from '../components/Sidebar';
import { ReminderToggle, SoundToggle } from '../components/Toggles';
import { Settings_Preferences } from '../components/Settings_Preferences';

const custom_css = `
    .container {
        padding: 28px;
    }
`

function Settings() {
    let settings = {
        reminders: true,
        sound: true,
        preferences: []
    }

    localStorage.setItem("settings", JSON.stringify(settings))

    return (
        <>
            <header>
                <style>{custom_css}</style>
                <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
                <div className="container">
                    
                </div>
                
            </header>

            <main className="container">
                <ReminderToggle />
                <SoundToggle />
                {/* <Settings_Preferences /> */}


            </main>
        </>
    )
}

export default Settings;