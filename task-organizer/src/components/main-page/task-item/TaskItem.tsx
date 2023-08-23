import React, {useEffect, useState} from 'react'
import moment, { Moment } from 'moment';

import "./TaskItem.scss"

export interface Task {
    taskName: string;
    done: boolean;
    priority: number;
    deadline: Moment | null;
}

function TaskItem(props) {
    const textBasicClassName = 'task-text '
    const textDoneState = 'done'
    const textNotDoneState = 'undone'

    const iconBasicClassNames = 'bi fa-2x '
    const checkSquareIcon = 'bi-check-square positive-props'
    const xSquareIcon = 'bi-x-square negative-props'

    const [doneStatus, setDoneStatus] = useState(false);
    const [textClassNames, setClassName] = useState(textBasicClassName);
    const [iconClassNames, setIconClassNames] = useState(iconBasicClassNames + checkSquareIcon)

    useEffect(() => {
        if (doneStatus === true) {
            setClassName(textBasicClassName + textDoneState)
            setIconClassNames(iconBasicClassNames + xSquareIcon)
        } else {
            setClassName(textBasicClassName + textNotDoneState)
            setIconClassNames(iconBasicClassNames + checkSquareIcon)
        }
    }, [doneStatus]);

    let onClick = () => {
        setDoneStatus(doneStatus => !doneStatus);
    }

    let { task, onDeleted } = props;

    return (
        <button className="task-item-wrapper">
            <div className={ textClassNames }>
                { task.taskName }
            </div>
            <div className="task-info">
                <i className={ iconClassNames } onClick={ onClick }/>
                <i className="bi fa-2x bi-arrow-up-right-square positive-props"/>
                <i className="bi fa-2x bi-arrow-down-right-square neutral-props"/>
                <i className="bi fa-2x bi-trash negative-props" onClick={ onDeleted }/>
            </div>
        </button>
    )
}

export default TaskItem
