import React from 'react';
import Checkbox from 'rc-checkbox';
import 'rc-checkbox/assets/index.css';

const custom_css = `
    .rc-checkbox:hover .rc-checkbox-inner,
    .rc-checkbox-input:focus + .rc-checkbox-inner {
        border-color: #000;
        background-color: #fff;
    }
    .rc-checkbox-checked .rc-checkbox-inner {
        background-color: #fff;
        border-color: #000;
    }
    .rc-checkbox-inner{
        border-color: #000;
        background-color: #fff;
    }
    .rc-checkbox-inner:after {
        border-color: #000;
        background-color: #fff;
    }
`

function onReminderChange(e) {
    let settings = JSON.parse(window.localStorage.getItem('settings'))
    settings.reminders = e.target.checked    
    localStorage.setItem('settings', JSON.stringify(settings))
}

function onSoundChange(e) {
    let settings = JSON.parse(window.localStorage.getItem('settings'))
    settings.sound = e.target.checked    
    localStorage.setItem('settings', JSON.stringify(settings))
}

export function ReminderToggle() {
    return (
        <>
            <style>{custom_css}</style>
            <p>
                <label>
                    <Checkbox
                    defaultChecked
                    onChange={onReminderChange}
                    disabled={false}
                    />
                </label>
            </p>
        </>
    )
}

export function SoundToggle() {
    return (
        <>
            <style>{custom_css}</style>
            <p>
                <label>
                    <Checkbox
                    defaultChecked
                    onChange={onSoundChange}
                    disabled={false}
                    />
                </label>
            </p>
        </>
    )
}