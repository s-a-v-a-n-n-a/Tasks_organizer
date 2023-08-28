import React from 'react';
import './TaskStatusFilter.scss'

export const enum State {
    AllPrioritized,
    AllSoon,
    Done,
    Active,
    Outdated
}

function TaskStatusFilter(props) {
    const buttons = [
        { name: "Priority", label: State.AllPrioritized },
        { name: "Deadline", label: State.AllSoon },
        { name: "Done", label: State.Done },
        { name: "Active", label: State.Active },
        { name: "Outdated", label: State.Outdated }
    ]

    let { changeFilterStatus } = props

    let buttonComponents = buttons.map((buttonName) => {
        return (
            <button className="status-button" key={ buttonName.label }
                    onClick={ () => changeFilterStatus(buttonName.label) }>
                { buttonName.name }
            </button>
        )
    })

    return (
        <div className="buttons-wrapper">
            { buttonComponents }
        </div>
    )
}

export default TaskStatusFilter;