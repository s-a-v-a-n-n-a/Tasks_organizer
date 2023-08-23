import React, { Component } from 'react';
import './TaskStatusFilter.scss'

export default class TaskStatusFilter extends Component {
    render() {
        return (
            <div className="buttons-wrapper">
                <button className="status-button" autoFocus>Priority list</button>
                <button className="status-button">Deadline list</button>
                <button className="status-button">Deleted tasks</button>
                <button className="status-button">Outdated</button>
            </div>
        )
    }
}