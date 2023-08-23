import React, { useState } from 'react';

import './TaskItemForm.scss'
import '../task-item/TaskItem.scss'
import { Task } from '../task-item'

function TaskItemForm(props) {
    const taskNamePlaceholder = "Type your task name"
    const priorityPlaceholder = "priority"

    let [newTaskName, setNewTaskName] = useState('')
    let [newTaskPriority, setNewTaskPriority] = useState(0)

    let changeTaskName = (event) => {
        setNewTaskName(event.target.value)
    }

    let changeTaskPriority = (event) => {
        setNewTaskPriority(event.target.value)
    }

    let { createTaskElementCallback, resetCreatingTask } = props

    let createTaskElement = () => {
        createTaskElementCallback({
            taskName: newTaskName,
            done: false,
            priority: newTaskPriority,
            deadline: null
        })
    }

    return (
        <div className="task-item-form-wrapper">
            <input type="text"
                   className="task-name-input"
                   placeholder={ taskNamePlaceholder }
                   onChange={ changeTaskName }
                   autoFocus/>
            <div className="task-info">
                <input type="number"
                       className="task-name-input"
                       placeholder={ priorityPlaceholder }
                       onChange={ changeTaskPriority }/>
                <i className="bi fa-2x bi-check-square positive-props"
                   onClick={ createTaskElement }/>
                <i className="bi fa-2x bi-x-square negative-props"
                   onClick={ resetCreatingTask }/>
            </div>
        </div>
    )
}

export default TaskItemForm;