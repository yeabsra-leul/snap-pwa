import React from 'react';
import Checkbox from 'rc-checkbox';
import 'rc-checkbox/assets/index.css';
import "../styles/toggles.css";

function onReminderChange(e) {
    let settings = JSON.parse(window.localStorage.getItem('settings'))
    settings.reminders = e.target.checked    
    localStorage.setItem('settings', JSON.stringify(settings))
}

function onSoundChange(e) {
    let settings = JSON.parse(window.localStorage.getItem('settings'))
    settings.sounds = e.target.checked    
    localStorage.setItem('settings', JSON.stringify(settings))
}

export function ReminderToggle() {
    return (
        <>
            <p>
                <label className="switch">
                    <Checkbox
                    defaultChecked={JSON.parse(window.localStorage.getItem('settings')).reminders}
                    onChange={onReminderChange}
                    disabled={false}
                    className='input'
                    />
                    <span className="slider" />
                </label>
            </p>
        </>
    )
}

export function SoundToggle() {
    return (
        <>
            <p>
                <label className="switch">
                    <Checkbox
                    defaultChecked={JSON.parse(window.localStorage.getItem('settings')).sounds}
                    onChange={onSoundChange}
                    disabled={false}
                    className='input'
                    />
                    <span className="slider" />
                </label>
            </p>
        </>
    )
}