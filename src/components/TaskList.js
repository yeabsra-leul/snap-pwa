import classNames from "classnames";
import ImageButton from "./Buttons";
import options from "../images/options.svg";
import location from "../images/location.svg";

import { scheduler } from "../scheduler/Scheduler";
import { useEffect, useState } from "react";

export default function TaskList({ selected }) {
  const [schedules, setSchedules] = useState(scheduler.schedules);

  useEffect(() => {
    setSchedules(
      scheduler.schedules.filter((schedule) => {
        return schedule.date.getDate() == selected;
      })
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
          <Task key={index} task={schedule.task} />
        ))}
      </div>
    </>
  );
}

function Task({ task }) {
  const cls = classNames({
    task: true,
    yellow: task.color == "yellow",
  });

  return (
    <div className={cls}>
      <div className="tasks__time-col">
        <span className="time start">{task.startTime}</span>
        <span className="time end">{task.endTime}</span>
      </div>

      <div className="tasks__task-col task__card">
        <h1 className="task__title">{task.name}</h1>
        <article className="task__description">{task.desc}</article>

        <section className="task__location">
          <ImageButton image={location} alt="location">
            {task.location}
          </ImageButton>
        </section>

        <ImageButton image={options} cls="btn__ctx" alt="context" />
      </div>
    </div>
  );
}
