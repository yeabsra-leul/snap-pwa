import { scheduler } from "../scheduler/Scheduler";
import { useEffect, useState } from "react";

import { taskMan } from "../scheduler/TaskManager";
import Task from "./Task";
import { routineManager } from "../scheduler/RoutineManager";

export default function TaskList({ selected }) {
  const [schedules, setSchedules] = useState(scheduler.schedules);

  useEffect(() => {
    if (scheduler.tasksAvailable()) {
      taskMan.initDays();
      taskMan.allotRoutines();
      scheduler.createSchedule();
    }
  }, []);

  useEffect(() => {

    setSchedules(
      scheduler.schedules.filter((schedule) => schedule.date.getDate() == selected)

      // schedule.task.title.contains(searchTerm)
    );

  }, [selected]);

  return (
    <>
      <div className="tasks-header">
        <section className="tasks__time-col"> time</section>
        <section className="tasks__task-col"> tasks</section>
      </div>

      <div className="tasks">
        {schedules.map((schedule, index) => (
          <Task key={index} task={schedule.task}/>
        ))}
      </div>
    </>
  );
}
