import React, {useEffect, useState} from 'react'

import "./TaskItem.scss"

import DisposableDataPicker from '../disposable-date-picker'

let outdated = (time: Date) => {
    let currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);

    return time.getTime() < currentDate.getTime();
}

function TaskItem(props) {
    const textBasicClassName = 'task-text'
    const textDoneState = ' done'
    const textNotDoneState = ' active'

    const iconBasicClassNames = 'bi fa-2x'
    const checkSquareIcon = ' bi-check-square positive-props'
    const xSquareIcon = ' bi-x-square negative-props'

    const taskDefaultClass = 'task-item-wrapper'
    const outdatedTask = ' outdated'
    const actualTask = ' relevant'

    let { task, changeDeadline, onDone, onDeleted, onIncreasePriority, onDecreasePriority } = props;
    let textClassNames = task.done === true ?
        textBasicClassName + textDoneState : textBasicClassName + textNotDoneState;
    let iconClassNames = task.done === true ? iconBasicClassNames + xSquareIcon : iconBasicClassNames + checkSquareIcon;
    let taskClassNames = outdated(task.deadline) ? taskDefaultClass + outdatedTask : taskDefaultClass + actualTask;

    return (
        <button className={ taskClassNames }>
            <div className={ textClassNames }>
                { task.taskName }
            </div>
            <div className="task-info">
                <div className="deadline-picker">
                    { task.deadline.toLocaleDateString() }
                    <DisposableDataPicker dateSwitcher={ changeDeadline }
                                          relevance={outdated(task.deadline) ? outdatedTask : actualTask}/>
                </div>
                <i className={ iconClassNames } onClick={ onDone }/>
                <div className="priority-info">{ task.priority }</div>
                <i className="bi fa-2x bi-arrow-up-right-square positive-props" onClick={ onIncreasePriority }/>
                <i className="bi fa-2x bi-arrow-down-right-square neutral-props" onClick={ onDecreasePriority }/>
                <i className="bi fa-2x bi-trash negative-props" onClick={ onDeleted }/>
            </div>
        </button>
    )
}

export { outdated }
export default TaskItem
