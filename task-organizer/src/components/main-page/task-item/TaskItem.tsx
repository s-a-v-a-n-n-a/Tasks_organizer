import React, { Component } from 'react'
import "./TaskItem.scss"
import ClickedButton from "../clicked-button";

interface TaskName {
    taskText: string;
}
export default class TaskItem extends Component<TaskName> {
    render() {
        return (
            <div className="task-item-wrapper">
                <div className="task-text">
                    {this.props.taskText}
                </div>
                <div className="task-info">
                    <i className="bi bi-check-square fa-2x"/>
                    {/*<ClickedButton/>*/}
                    <i className="bi bi-arrow-up-right-square fa-2x"/>
                    <i className="bi bi-arrow-down-right-square fa-2x"/>
                    <i className="bi bi-trash fa-2x"/>
                </div>
            </div>
        )
    }
}
