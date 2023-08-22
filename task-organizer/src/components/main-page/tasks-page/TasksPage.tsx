import React, { Component } from 'react'
import "./TasksPage.scss"
import TaskItem from "../task-item";
import moment, { Moment } from 'moment';

interface Task {
    name: string;
    done: boolean;
    priority: number;
    deadline: Moment | null;
}

export default class TasksPage extends Component {
    headerText = "All tasks";
    createTaskText = "Add task"

    tasks = ["Task1", "Task2", "Task3"]

    taskItems = this.tasks.map((task) => {
        return (
            <li className="task-item"><TaskItem taskText={ task }/></li>
        )
    })
    render() {
        return (
            <div className="tasks-page-wrapper">
                <header className="tasks-page-header">
                    { this.headerText }
                </header>
                <ul className="task-list">
                    { this.taskItems }
                </ul>
                <button className="create-task-button">
                    <div className="create-task-button-text">{ this.createTaskText }</div>
                </button>
            </div>
        )
    }
}