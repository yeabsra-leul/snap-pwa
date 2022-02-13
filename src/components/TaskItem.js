import classNames from "classnames";
import ImageButton from "./Buttons";
import options from "../images/options.svg";
import location from "../images/location.svg";
import edit from "../images/edit.svg";
import del from "../images/delete.svg";
import done from "../images/done.svg";
import pin from "../images/pin.svg";

import { scheduler } from "../scheduler/Scheduler";
import { useState } from "react";
import { reload } from "./utils";
import ClickAwayListener from "react-click-away-listener";
import { taskMan } from "../scheduler/TaskManager";

function formatTime(minutes) {
    const hour = Math.floor(Number(minutes) / 60)
    const minute = Number(minutes) % 60

    return `${hour}:${minute}`;
}

export function TaskItem({ schedule, task, refreshSchedules, navigator }) {
	const [popupShown, setPopupShown] = useState(false);

	const cls = classNames({
		task: true,
		yellow: task.color == "yellow",
		green: task.color == "green",
		red: task.color == "red",
		blue: task.color == "blue",
	});

	function removeTask() {
		taskMan.removeTask(task);
		// reload all schedules and tasks from repository
		reload();
		// set the new schdules to be rendered schedules
		refreshSchedules(scheduler.schedules);
	}

	function markTaskComplete() {
		removeTask();
		// add the task to the list of completed tasks
		taskMan.addCompletedTask(task);
	}

	function redirect() {
		// redirect to another page
		navigator(`/task/${task.id}`);
	}

	return (
		<div className={cls}>
			<div className="tasks__time-col">
				<span className="time start">{formatTime(schedule.time.start)}</span>
				<span className="time end">{formatTime(schedule.time.end)}</span>
			</div>

			<div className="tasks__task-col task__card">
				<h1 className="task__title">{task.name}</h1>
				<article className="task__description">{task.desc}</article>

				<section className="task__location">
					<ImageButton image={location} alt="location">
						{task.location}
					</ImageButton>
				</section>

				<ImageButton
					image={options}
					cls="btn__ctx"
					alt="context"
					onClick={() => setPopupShown(!popupShown)}
				/>
			</div>
			{popupShown && (
				<ClickAwayListener
					onClickAway={() => setPopupShown(!popupShown)}
				>
					<div className={"popup"}>
						<li>
							<ImageButton image={pin} onClick={() => {}}>
								Pin
							</ImageButton>
						</li>

						<li>
							<ImageButton image={edit} onClick={redirect}>
								Edit
							</ImageButton>
						</li>

						<li>
							<ImageButton image={del} onClick={removeTask}>
								Delete
							</ImageButton>
						</li>

						<li>
							<ImageButton
								image={done}
								onClick={markTaskComplete}
							>
								Mark Done
							</ImageButton>
						</li>
					</div>
				</ClickAwayListener>
			)}
		</div>
	);
}
