import "../styles/schedules.css";

import { useEffect, useState } from "react";

import Calendar from "../components/Calendar";
import Nav, { UtilityNav } from "../components/Nav";
import TaskList from "../components/TaskList";
import Sidebar from "../components/Sidebar";
import SearchInput from "../components/SearchInput";
import { taskMan } from "../scheduler/TaskManager";

function Schedules() {
	const [selected, setSelected] = useState(new Date().getDate());
	const [showInput, setShowInput] = useState(true);
	const [searchTerm, setSearchTerm] = useState("");

	useEffect(() => {
		// save the current state before unmounting the current state;
		return () => taskMan.saveState()
	})

	return (
		<>
			<header>
				<Sidebar
					pageWrapId={"page-wrap"}
					outerContainerId={"outer-container"}
				/>
				<div className="container">
					<Nav
						utilities={true}
						showInput={showInput}
						setShowInput={setShowInput}
					>
						<SearchInput
							searchTerm={searchTerm}
							setSearchTerm={setSearchTerm}
						/>
					</Nav>

					<UtilityNav />

					<Calendar selected={selected} setSelected={setSelected} />
				</div>
			</header>

			<main className="container">
				<TaskList
					selected={selected}
					searchTerm={searchTerm}
					showInput={showInput}
				/>
			</main>

			<footer></footer>
		</>
	);
}

export default Schedules;