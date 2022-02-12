import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Nav from "../components/Nav";

import "../styles/form.css";
import { Task, taskMan } from "../scheduler/TaskManager";

function TaskPage () {

    useEffect(() => {

        // save the task when component didUnMount
        return () => {
            taskMan.saveState()
        }

    })
    return (
        <>
            <header>

                <Sidebar
                    pageWrapId={"page-wrap"}
                    outerContainerId={"outer-container"}
                />

                <div className="container">
                    <Nav title="Add Task" utilities={false}/>
                </div>      

            </header>

            <main className="container">
                <TaskForm/>
            </main>
        </>
    );
}


function TaskForm() {
    const [taskName, setTaskName] = useState('');
    const [taskDesc, setTaskDesc] = useState('');
    const [taskDeadline, setTaskDeadline] = useState('');
    const [taskColor, setTaskColor] = useState('');
    const [taskDuration, setTaskDuration] = useState('');
    const [taskPriority, setTaskPriority] = useState(1);

    const handle = (e) => setTaskColor(e.target.value)

    function submitform(){
        const task = new Task(taskName, 
            taskDesc, 
            taskDuration, 
            taskDeadline, 
            taskPriority, 
            taskColor);

        console.log(task);
        taskMan.addTask(task);
    }

    return (
        <form id="routines-form" className="mt-4">

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
                <labe >Color</labe>
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
                    Save Task
                </button>
            </div>
        </form>
    )
}

export default TaskPage;