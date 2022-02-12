class Repository {

    constructor() {}

    getRoutines() {
        if(!localStorage.getItem("ROUTINES"))
            return [];

        return JSON.parse(localStorage.getItem("ROUTINES"));
    }

    setRoutines (routines) {
        console.log(routines)
        localStorage.setItem("ROUTINES", JSON.stringify(routines));
    }


    getTasks() {
        if (!localStorage.getItem("TASKS")){
            console.log("key not found")
            return [];
            
        }

        let stored = localStorage.getItem("TASKS")
        return JSON.parse(stored)
        
    }

    setTasks(tasks) {
        localStorage.setItem("TASKS", JSON.stringify(tasks));
    }
}

export const repository = new Repository();

