import { repository } from "./Repository";
import { Repeat, Interval } from "./Routine";

class RoutineManager {
	constructor() {
		this._routines = repository.getRoutines();
	}

	allocateRoutine = function (day) {
		for (let routine of this._routines) {
			if (
				day.date.getDay() == routine.repeat ||
				routine.repeat == Repeat.AllDAY
			) {
				// remove a specified time interval from the day
				const booked = new Interval(routine.start, routine.end);
				day.removeInterval(booked);
			}
		}
	};

	addRoutine = function (routine) {
		this._routines.push(routine);
	};

	removeRoutine = function (routine) {
		this._routines = this._routines.filter((item) => routine.id != item.id);
	};

	saveState() {
		repository.setRoutines(this._routines);
	}
}

export const routineManager = new RoutineManager();

// // test
// routineManager.addRoutine(
// 	new Routine(0, 1300, 1350, "Kill the dog", Repeat.FRI)
// );
// routineManager.addRoutine(new Routine(0, 0, 60, "Kill the dog", Repeat.AllDAY));
