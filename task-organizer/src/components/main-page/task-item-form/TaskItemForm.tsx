import React, { useState } from 'react';
import { Calendar, Popover } from "antd";

import './TaskItemForm.scss'
import '../task-item/TaskItem.scss'

function TaskItemForm(props) {
    const taskNamePlaceholder = "Type your task name"
    const priorityPlaceholder = "priority"

    let [newTaskName, setNewTaskName] = useState('Smth important')
    let [newTaskPriority, setNewTaskPriority] = useState(0)
    let [newTaskDeadline, setNewTaskDeadline] = useState(() => {
        let currentDate = new Date();
        let defaultTime = currentDate;
        defaultTime.setDate(defaultTime.getDate() + 1);
        defaultTime.setHours(0,0,0,0);
        return defaultTime;
    })

    let changeTaskName = (event) => {
        setNewTaskName(event.target.value)
    }

    let changeTaskPriority = (event) => {
        setNewTaskPriority(+event.target.value)
    }

    let selectDate = (date, { source }) => {
        if (source === 'date') {
            let newDate = new Date(date);
            newDate.setHours(0,0,0,0);
            setNewTaskDeadline(newDate);
        }
    }

    let { createTaskElementCallback, resetCreatingTask } = props

    let createTaskElement = () => {
        createTaskElementCallback({
            taskName: newTaskName,
            done: false,
            priority: newTaskPriority,
            deadline: newTaskDeadline
        })
    }

    return (
        <div className="task-item-form-wrapper">
            <input type="text"
                   className="task-input task-name-input"
                   placeholder={ taskNamePlaceholder }
                   onChange={ changeTaskName }
                   autoFocus/>
            <div className="task-info">
                <div className="deadline-picker">
                    <div className="task-input deadline-picked">{ newTaskDeadline.toLocaleDateString() }</div>
                    <Popover content={ <Calendar fullscreen={ false }
                                                 onSelect={ selectDate }
                                                 className="task-deadline-input"/> }
                             className="popover-wrapper-form">
                        <button className="button-wrapper-form">
                            <i className="bi bi-calendar calendar-button-form"/>
                        </button>
                    </Popover>
                </div>
                <input type="number"
                       className="task-input task-priority-input"
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