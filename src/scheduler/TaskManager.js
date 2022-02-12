
import { TaskQueue } from "./PriorityQueue";
import { repository } from "./Repository";
import { TimeInterval } from "./Routine";
import { routineManager } from "./RoutineManager";

const DAYINMILL = 1000 * 3600 * 24;

export class Task {
	constructor(name, desc, duration, deadline, priority, color) {
		this.name = name;
		this.desc = desc;
		this.duration = duration;
		this.deadline = deadline;
		this.priority = priority;
		this.color = color;
	}
}

class TaskManager {

	constructor() {
		this.taskList = repository.getTasks();
		this.tasks = new TaskQueue(repository.getTasks());

		console.log(this.tasks)
		this.days = [];
	}

	initDays() {
		let now = new Date();

		let lastDay = this.tasks.farthestDeadline();

		// console.log(lastDay);
		if(typeof lastDay == 'string'){
			lastDay = new Date(lastDay)
		}
		let daysInBetWeen = lastDay.getTime() - now.getTime();

		daysInBetWeen = Math.ceil(daysInBetWeen / DAYINMILL);

		this.days.push(new TimeInterval(now));

		if (daysInBetWeen >= 2) {
			for (let i = 1; i < daysInBetWeen - 1; i++) {
				// get the time the date
				let cur = new Date(now.getTime() + i * DAYINMILL);
				// set the time to 00:00:00
				let day = new TimeInterval(new Date(cur), 0);

				this.days.push(day);
			}
		}

        // TODO
		if (daysInBetWeen > 2) {
			this.days.push(new TimeInterval(lastDay, 0, true));
		}
	}

    allotRoutines() {
        this.days.forEach(day => {
            routineManager.allocateRoutine(day)
        })
    }

    removeTask(task){
        this.tasksList.remove(task)
    }

	addTask(task){
		this.taskList.push(task);
	}

	saveState(){
		repository.setTasks(this.taskList);
	}

}

export const taskMan = new TaskManager();

