import { createTask } from "./addTask.js";

export const readTask = () => {
    const list = document.querySelector('[data-list]')
    
    const taskList = JSON.parse(localStorage.getItem('tasks')) || [];
    console.log(taskList);

    taskList.forEach((task) => {
        list.appendChild(createTask(task));
    });

}