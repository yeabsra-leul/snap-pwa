import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Nav from "../components/Nav";

import "../styles/form.css";
import { Task, taskMan } from "../scheduler/TaskManager";
import { TaskForm } from "../components/TaskForm";
import { useParams} from "react-router-dom";

function TaskPage () {

    const { id } = useParams();
    const currentTask = taskMan.taskList.find(t => t.id == id);
    const title = currentTask ? "Edit Task": "Add Task";

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
                    <Nav title={title} utilities={false}/>
                </div>      
            </header>

            <main className="container">
                <TaskForm object={currentTask} title={title}/>
            </main>
        </>
    );
}


export default TaskPage;