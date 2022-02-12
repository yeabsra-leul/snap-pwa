import { taskMan } from "../scheduler/TaskManager";
import { scheduler } from "../scheduler/Scheduler";
export function reload() {
    taskMan.init();
    taskMan.initDays();
    taskMan.allotRoutines();

    // remove all schedules
    scheduler.schedules = []
    // create new schedules
    scheduler.createSchedule();
}

