import "../styles/form.css";

import { useEffect, useState } from "react";

import Sidebar from "../components/Sidebar";
import Nav from "../components/Nav";
import { taskMan } from "../scheduler/TaskManager";
import { TaskForm } from "../components/TaskForm";
import { useParams } from "react-router-dom";

function TaskPage() {
	const { id } = useParams();
	const [isOpened, setIsOpened] = useState(false);

	const currentTask = taskMan.taskList.find((t) => t.id === id);
	const title = currentTask ? "Edit Task" : "Add Task";

	useEffect(() => {
		// save the task when component didUnMount
		return () => {
			taskMan.saveState();
		};
	});

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
						title={title}
						utilities={false}
						isOpened={isOpened}
						setIsOpened={setIsOpened}
					/>
				</div>
			</header>

			<main className="container">
				<TaskForm object={currentTask} title={title} />
			</main>
		</>
	);
}

export default TaskPage;
