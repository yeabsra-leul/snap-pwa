// import { useState } from "react";
// import classNames from "classnames";
import Calendar from "../components/Calendar";
import Nav, {UtilityNav} from "../components/Nav"; 

import settings from "../images/settings.svg";
import location from "../images/location.svg";


import "../styles/schedules.css"
import ImageButton from "../components/Buttons";
import TaskList from "../components/TaskList";

function Schedules() {
    
    return (
        <>
            <header>

                <div className="container">
                    <Nav />
                    <UtilityNav />
                
                    <Calendar />
                </div>
                
            </header>

            <main className="container">
                <TaskList />
            </main>

            <footer>

            </footer>
        </>
    );
}



export default Schedules;