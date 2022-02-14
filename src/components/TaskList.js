import { scheduler } from "../scheduler/Scheduler";
import { useEffect, useState } from "react";

import { reload } from "./utils";
import { useNavigate } from "react-router-dom";
import { TaskItem } from "./TaskItem";
import { routineManager } from "../scheduler/RoutineManager";

export default function TaskList({ selected, searchTerm, showInput }) {
	const [schedules, setSchedules] = useState(scheduler.schedules);
	const navigator = useNavigate();

	useEffect(() => {
		reload();
	}, []);

	useEffect(() => {
		setSchedules(
			scheduler.schedules.filter((schedule) => {
				if (showInput) {
					return schedule.date.getDate() == selected;
				}

				return (
					schedule.date.getDate() == selected &&
					schedule.task.name.includes(searchTerm)
				);
			})
		);
	}, [selected, searchTerm, showInput]);

	return (
		<>
			<div className="tasks-header">
				<section className="tasks__time-col"> time</section>
				<section className="tasks__task-col"> tasks</section>
			</div>

			<div className="tasks">
				{schedules.map((schedule, index) => (
					<TaskItem
						key={index}
						schedule={schedule}
						task={schedule.task}
						navigator={navigator}
						refreshSchedules={setSchedules}
					/>
				))}
			</div>
		</>
	);
}
