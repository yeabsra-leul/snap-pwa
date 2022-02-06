import "../styles/settings.css";
import { ReminderToggle, SoundToggle } from './Toggles';

export function Settings_Preferences () {
    return (
        <div className='setting-part'>
            <div className='settings-title'>
            <div className='settings-title-icon'></div>
                <label className='header'>Settings</label>
            </div>

            <div className='setting-line-flex'>
                <div className='setting-labels'>
                    <div className='setting-icon reminder-icon'></div>
                    <label className='setting-name reminder-name'>Reminders</label>
                </div>
                <div className='setting-toggle reminder-toggle'>
                    <ReminderToggle />
                </div>
            </div>

            <div className='setting-line-flex'>
                <div className='setting-labels'>
                    <div className='setting-icon sound-icon'></div>
                    <label className='setting-name sound-name'>Sounds</label>
                </div>
                <div className='setting-toggle sound-toggle'>
                    <SoundToggle />
                </div>
            </div>
        </div>
    )
}