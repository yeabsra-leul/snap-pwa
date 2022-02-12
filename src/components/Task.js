import classNames from "classnames";
import ImageButton from "./Buttons";
import options from "../images/options.svg";
import location from "../images/location.svg";

function Task({ task}) {
    const cls = classNames({
      task: true,
      yellow: task.color == "yellow",
    });
  
    return (
      <div className={cls}>
        <div className="tasks__time-col">
          <span className="time start">{}</span>
          <span className="time end">{task.duration}</span>
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


  export default Task;