import React, {useEffect, useState} from 'react'
import moment, { Moment } from 'moment';
import { v4 as uuidv4 } from 'uuid';

import "./TasksPage.scss"

import TaskItem, { Task } from "../task-item";
import TaskStatusFilter from "../task-status-filter";
import SearchBar from "../search-bar";
import TaskItemForm from "../task-item-form";

interface TaskElement {
    id: number;
    task: Task;
}

function TasksPage() {
    const headerText = "All tasks";
    const createTaskText = "Add task"

    let deleteTask = (id) => {
        let taskIdx = tasks.findIndex((task) => task.id === id);
        setTasks(tasks => [
            ...tasks.slice(0, taskIdx),
            ...tasks.slice(taskIdx + 1)
        ]);
    }

    let addTaskCallback = (task) => {
        let newId = uuidv4()
        setTasks(tasks => [...tasks, {id: newId, ...task}])

        hideFormComponent();
    }

    let showFormComponent = () => {
        setFormComponent(<TaskItemForm createTaskElementCallback={ addTaskCallback }
                                       resetCreatingTask={ hideFormComponent }/>)
    }

    let hideFormComponent = () => {
        setFormComponent(<div/>)
    }

    let [formComponent, setFormComponent] = useState(<div/>)
    let [tasks, setTasks] = useState([
        { id: 1, taskName: "Task1", done: false, priority: 0, deadline: null },
        { id: 2, taskName: "Task2", done: false, priority: 0, deadline: null },
        { id: 3, taskName: "Task3", done: false, priority: 0, deadline: null }
    ]);
    let [taskItems, setTaskItems] = useState(tasks.map((taskElement) => {
        let { id, ...task } = taskElement
        return (
            <li className="task-item" key={ id }><TaskItem task={ task } onDeleted={() => deleteTask(id)}/></li>
        )
    }))

    useEffect(() => {
        setTaskItems(tasks.map((taskElement) => {
            let { id, ...task } = taskElement
            return (
                <li className="task-item" key={ id }><TaskItem task={ task } onDeleted={ () => deleteTask(id) }/></li>
            )
        }))
    }, [tasks]);

    return (
        <div className="tasks-page-wrapper">
            <header className="tasks-page-header">
                { headerText }
            </header>
            <TaskStatusFilter/>
            <SearchBar/>
            <ul className="task-list">
                { taskItems }
            </ul>
            { formComponent }
            <button className="create-task-button"
                    onClick={ showFormComponent }>
                { createTaskText }
            </button>
        </div>
    )
}

export default TasksPage;