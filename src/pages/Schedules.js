import "../styles/schedules.css";

import TaskList from "../components/TaskList";
import Sidebar from "../components/Sidebar";
import Calendar from "../components/Calendar";
import Nav, { UtilityNav } from "../components/Nav";

import { useState } from "react";

function Schedules() {
  const [selected, setSelected] = useState((new Date()).getDate());

  return (
    <>
      <header>
        <Sidebar
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
        />

        <div className="container">
          <Nav />

          <UtilityNav />

          <Calendar selected={selected} setSelected={setSelected} />
        </div>
      </header>

      <main className="container">
        <TaskList selected={selected} />
      </main>

      <footer>

      </footer>
    </>
  );
}

export default Schedules;

// let tasks = [

//     new Task(
//         "Laundary",
//         "socks, underware, pants, sweater, ",
//         60,
//         new Date(),
//         1
//     ),

//     new Task(
//         "Laundary",
//         "socks, underware, pants, sweater, ",
//         60,
//         new Date(new Date().setDate(30)),
//         1
//     ),

// ];

// for (let task of tasks) {
//     taskMan.tasks.enqueue(task);
// }

// console.log(taskMan.tasks)
// taskMan.saveState();
