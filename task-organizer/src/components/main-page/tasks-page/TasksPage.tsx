import React, {useCallback, useEffect, useState} from 'react'
import { v4 as uuidv4 } from 'uuid';

import "./TasksPage.scss"

import TaskItem, {outdated} from "../task-item";
import TaskStatusFilter, { State } from "../task-status-filter";
import SearchBar from "../search-bar";
import TaskItemForm from "../task-item-form";

function TasksPage() {
    const headerText = "All tasks";
    const createTaskText = "Add task";

    let markDone = (id) => {
        const taskIdx = tasks.findIndex((task) => task.id === id);
        const oldTask = tasks[taskIdx];
        const newTask = {...oldTask, done: !oldTask.done}
        setTasks(tasks => [
            ...tasks.slice(0, taskIdx),
            newTask,
            ...tasks.slice(taskIdx + 1)
        ]);
    }

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

    let changeProperty = (id, propertyName, propertyValue) => {
        let taskIdx = tasks.findIndex((task) => task.id === id);
        let oldTask = tasks[taskIdx];
        let newTask = {...oldTask, [propertyName]: propertyValue }
        setTasks(tasks => [
            ...tasks.slice(0, taskIdx),
            newTask,
            ...tasks.slice(taskIdx + 1)
        ]);
    }

    let changePriority = (id, difference) => {
        let taskIdx = tasks.findIndex((task) => task.id === id);
        let oldTask = tasks[taskIdx];
        let newTask = {...oldTask, priority: oldTask.priority + difference}
        setTasks(tasks => [
            ...tasks.slice(0, taskIdx),
            newTask,
            ...tasks.slice(taskIdx + 1)
        ]);
    }

    let increasePriority = (id) => {
        changePriority(id, 1)
    }

    let decreasePriority = (id) => {
        changePriority(id, -1)
    }

    let changeDeadline = (id, newDeadline) => {
        changeProperty(id, "deadline", newDeadline);
    }

    let [searchTerm, setSearchTerm] = useState('');
    let onTaskSearch = (term) => {
        setSearchTerm(term);
    }

    let showFormComponent = () => {
        setFormComponent(<TaskItemForm createTaskElementCallback={ addTaskCallback }
                                       resetCreatingTask={ hideFormComponent }/>)
    }

    let hideFormComponent = () => {
        setFormComponent(<div/>)
    }

    let [visibleState, setVisibleState] = useState(State.AllPrioritized);
    let filter = (items) => {
        switch(visibleState) {
            case State.AllPrioritized:
                return items.slice().sort((a, b) => {
                    if (b.priority === a.priority) {
                        return a.deadline.getTime() - b.deadline.getTime();
                    }

                    return b.priority - a.priority;
                });
            case State.AllSoon:
                return items.slice().sort((a, b) => {
                    if (a.deadline.getTime() === b.deadline.getTime()) {
                        console.log("Same date");
                        return b.priority - a.priority;
                    } else {
                        return a.deadline.getTime() - b.deadline.getTime();
                    }
                });
            case State.Done:
                return items.filter((item) => item.done === true);
            case State.Active:
                return items.filter((item) => item.done === false);
            case State.Outdated:
                return items.filter((item) => {
                    return outdated(item.deadline);
                });
            default:
                return items;
        }
    }

    let search = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter((item) => (item.taskName.toLowerCase()).indexOf(term.toLowerCase()) > -1)
    }

    let changeFilterStatus = (status) => {
        setVisibleState(status);
    }

    let [formComponent, setFormComponent] = useState(<div/>)
    let [tasks, setTasks] = useState([
        { id: uuidv4(), taskName: "Clean flat", done: false, priority: 0,
            deadline: new Date(2023, 7, 30, 0, 0, 0, 0) },
        { id: uuidv4(), taskName: "Attend classes", done: false, priority: 0,
            deadline: new Date(2023, 8, 1, 0, 0, 0, 0) },
        { id: uuidv4(), taskName: "Buy workbooks", done: false, priority: 0,
            deadline: new Date(2023, 7, 31, 0, 0, 0, 0) }
    ]);

    let spreadTaskItems = () => {
        return filter(search(tasks, searchTerm)).map((taskElement) => {
            let { id, ...task } = taskElement
            return (
                <li className="task-item" key={ id }>
                    <TaskItem task={ task }
                              changeDeadline={ (newDeadline) => changeDeadline(id, newDeadline) }
                              onDone={ () => markDone(id) }
                              onDeleted={ () => deleteTask(id) }
                              onIncreasePriority={ () => increasePriority(id) }
                              onDecreasePriority={ () => decreasePriority(id) }/>
                </li>
            )
        })
    }

    let [taskItems, setTaskItems] = useState(spreadTaskItems)

    useEffect(() => {
        console.log("changing task items")
        setTaskItems(spreadTaskItems);
    }, [tasks, visibleState, searchTerm]);

    return (
        <div className="tasks-page-wrapper">
            <header className="tasks-page-header">
                { headerText }
            </header>
            <TaskStatusFilter changeFilterStatus={ changeFilterStatus } />
            <SearchBar onTermChange={ onTaskSearch }/>
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