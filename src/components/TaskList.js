import classNames from "classnames";
import ImageButton from "./Buttons";
import options from "../images/options.svg";
import location from "../images/location.svg";
import edit from "../images/edit.svg";
import del from "../images/delete.svg";
import done from "../images/done.svg";
import pin from "../images/pin.svg"

import { scheduler } from "../scheduler/Scheduler";
import { taskMan } from "../scheduler/TaskManager";
import { useEffect, useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import { reload } from "./utils";
import { useNavigate } from "react-router-dom";

export default function TaskList({ selected }) {
  const [schedules, setSchedules] = useState(scheduler.schedules);
  const navigator = useNavigate();

  useEffect(() => { reload() }, []);

  useEffect(() => {
    setSchedules(
      scheduler.schedules.filter((schedule) => {
        return schedule.date.getDate() == selected;
      })
    );
  }, [selected]);

  let refresh = () => {
    reload()
    return setSchedules;
  }

  return (
    <>
      <div className="tasks-header">
        <section className="tasks__time-col"> time</section>
        <section className="tasks__task-col"> tasks</section>
      </div>

      <div className="tasks">
        {schedules.map((schedule, index) => (
          <Task key={index} task={schedule.task} navigator={navigator} refresh={refresh} />
        ))}
      </div>
    </>
  );
}

function Task({ task, refresh, navigator}) {

  const [popupShown, setPopupShown] = useState(false);

  const cls = classNames({
    task: true,
    yellow: task.color == "yellow",
  });

  function removeTask(){
    taskMan.removeTask(task);
    let setter = refresh();
    setter(scheduler.schedules);
  }

  function redirect() {
    console.log("edit page");
    navigator(`/task/${task.id}`)
  }

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

        <ImageButton image={options} cls="btn__ctx" alt="context" 
            onClick={() => setPopupShown(!popupShown)} />
      </div>
      {popupShown && 
        <ClickAwayListener onClickAway={() => setPopupShown(!popupShown)}>
          <div className={'popup'}>
              
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
                <ImageButton image={done} onClick={() => task.completed = false}>
                  Mark Done
                </ImageButton>
              </li>
          </div>
        </ClickAwayListener>
      }
      
    </div>
  );
}
