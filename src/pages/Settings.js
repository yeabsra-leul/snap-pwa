import Sidebar from "../components/Sidebar";
import { useState } from "react";
import Nav from "../components/Nav";
import { Routines, Preferences } from "../components/SettingPersistence";
import RoutineForm from "../components/RoutineForm";

function Settings() {

    const [isOpened, setIsOpened] = useState(false);
    // TODO remove the code below
	if (JSON.parse(localStorage.getItem("settings")) === null) {
		let settings = {
			reminders: true,
			sounds: true,
			routines: [],
		};
		localStorage.setItem("settings", JSON.stringify(settings));
	}

	return (
		<>
			<header>
				<Sidebar
					pageWrapId={"page-wrap"}
					outerContainerId={"outer-container"}
					isOpened={isOpened}
					setIsOpened={setIsOpened}
				/>

				<div className="container">
					<Nav
						title={"Settings"}
						utilities={false}
						isOpened={isOpened}
						setIsOpened={setIsOpened}
					/>
				</div>
			</header>

			<main className="container">
				<Preferences />
                <label class="header">Add A Routine</label>
                <RoutineForm/>
				{/* <Routines /> */}
			</main>
		</>
	);
}

export default Settings;
