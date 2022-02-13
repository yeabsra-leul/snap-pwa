import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Task, taskMan } from "../scheduler/TaskManager";

export function TaskForm({object, title}) {

    const [taskName, setTaskName] = useState(object?.name || '');
    const [taskDesc, setTaskDesc] = useState(object?.desc || '');
    const [taskDeadline, setTaskDeadline] = useState(object?.deadline || '');
    const [taskColor, setTaskColor] = useState(object?.color || '');
    const [taskDuration, setTaskDuration] = useState(object?.duration || '');
    const [taskPriority, setTaskPriority] = useState(object?.priority || 1);
    const [taskLocation, setTaskLocation] = useState(object?.location || '');

    const handle = (e) => setTaskColor(e.target.value)
    let navigator = useNavigate()

    function submitform(){

        const task = new Task(taskName, 
            taskDesc, 
            taskDuration, 
            taskDeadline, 
            taskPriority, 
            taskLocation,
            taskColor);

        console.log(task);

        if(object){
            // remove the object to be added later its modifed in the edit mode
            taskMan.removeTask(object);
        }
            
        taskMan.addTask(task);      

        navigator('/', { replace: true })
    }

    return (
        <form id="routines-form" className="mt-1">

            <div className='input-line'>
                <label className='input-name taskname-name'>Name</label>
            </div>
            <div className='input-line'>
                <input 
                    type='text' 
                    value={taskName}
                    onChange={(e) => {setTaskName(e.target.value)}}
                ></input>
            </div>

            <div className='input-line'>
                <label className='input-name taskname-name'>Description</label>
            </div>
            <div className='input-line'>
                <textarea 
                    value={taskDesc} 
                    onChange={(e) => {setTaskDesc(e.target.value)}}>

                </textarea>
            </div>

            <div className='input-line'>
                <label className='input-name taskstart-name timeset-name'>Duration</label>
            </div>
            <div className='input-line'>
                <input 
                    type='number' 
                    value={taskDuration} onChange={(e) => {setTaskDuration(e.target.value)}}
                />
            </div>

            <div className='input-line'>
                <label className='input-name taskstart-name timeset-name'>Location</label>
            </div>
            <div className='input-line'>
                <input 
                    type='text' 
                    value={taskLocation} onChange={(e) => {setTaskLocation(e.target.value)}}
                />
            </div>

            <div className='input-line'>
                <label className='input-name taskstart-name timeset-name'>Deadline</label>
            </div>
            <div className='input-line'>
                <input 
                    type='datetime-local' 
                    value={taskDeadline} onChange={(e) => {setTaskDeadline(e.target.value)}}
                />
            </div>

            <div className='input-line'>
                <label className='input-name taskstart-name timeset-name'>Priority</label>
            </div>
            <div className='input-line'>
                <select value={taskPriority} onChange={(e) => setTaskPriority(e.target.value)}>
                    <option value={4}>High Priority</option>
                    <option value={3}>Crucial</option>
                    <option value={2}>Normal</option>
                    <option value={1}>Cassual</option>
                </select>
            </div>

            <div className='input-line'>
                <label >Color</label>
            </div>

            <div className='input-line'>
                <label className="hidden">Yellow</label>
                <input type="radio" name="color" id="yellow" value="yellow" 
                    checked={taskColor == 'yellow'}
                    onChange={handle}/>

                <label className="hidden">Green</label>
                <input type="radio" name="color" id="green" value="green"
                    checked={taskColor == 'green'}
                    onChange={handle} />

                <label className="hidden">Red</label>
                <input type="radio" name="color" id="red" value="red" 
                    checked={taskColor == 'red'}
                    onChange={handle}/>

                <label className="hidden">Blue</label>
                <input type="radio" name="color" id="blue" value="blue" 
                    checked={taskColor == 'blue'}
                    onChange={handle}/>
            </div>

            <div className='input-line'>
                <button 
                    type="button" 
                    className='mt-4 btn btn__img add-routine'
                    onClick={() => submitform()}>
                    {title}
                </button>
            </div>
        </form>
    )
}