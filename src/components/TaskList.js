import classNames from "classnames"
import ImageButton from "./Buttons"
import options from "../images/options.svg"
import location from "../images/location.svg"

export default function TaskList({}){
    return(
        <>
            <div className="tasks-header">
                <section className="tasks__time-col"> time</section>
                <section className="tasks__task-col"> tasks</section>
            </div>

            <div className="tasks">
                {tasks.map((task, index) => <Task key={index} task={task}/>)}
            </div>
        </>
    )
}

function Task({task}){
    const cls = classNames({
        "task": true,
        "yellow": task.color == "yellow"
    })
    return (
        <div className={cls}>
            <div className="tasks__time-col">
                <span className="time start">{task.startTime}</span>
                <span className="time end">{task.endTime}</span>
            </div>
            
            <div className="tasks__task-col task__card">
                <h1 className="task__title">{task.title}</h1>
                <article className="task__description">
                    {task.description}
                </article>

                <section className="task__location">
                    <ImageButton
                        image={location}
                        alt="location"
                    >
                        {task.location}
                    </ImageButton>
                </section>

                <ImageButton
                    image={options}
                    cls="btn__ctx"
                    alt="context"
                />
            </div>
        </div>
    )
}

const tasks = [{
    startTime: "08:30 AM",
    endTime: "11:30 AM",
    title: "Web Design Assignment",
    description: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
    location: "green lab"
},
{
    startTime: "08:30 AM",
    endTime: "11:30 AM",
    title: "Web Design Assignment",
    description: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
    location: "green lab",
    color: "yellow"
},
{
    startTime: "08:30 AM",
    endTime: "11:30 AM",
    title: "Web Design Assignment",
    description: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
    location: "green lab",
    color: "yellow"
},
{
    startTime: "08:30 AM",
    endTime: "11:30 AM",
    title: "Web Design Assignment",
    description: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
    location: "green lab",
    color: "yellow"
},
{
    startTime: "08:30 AM",
    endTime: "11:30 AM",
    title: "Web Design Assignment",
    description: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
    location: "green lab",
    color: "yellow"
},
{
    startTime: "08:30 AM",
    endTime: "11:30 AM",
    title: "Web Design Assignment",
    description: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
    location: "green lab",
    color: "yellow"
},
]