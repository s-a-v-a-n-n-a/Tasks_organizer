import React, { Component } from 'react'
import "./ClickedButton.scss"

interface TaskName {
    taskText: string;
}
export default class ClickedButton extends Component {
    clicked = false;

    changeClickedProperty() {
        this.clicked = this.clicked !== true;
    }
    render() {
        return (
            <button className="bi bi-check-square fa-2x clicked-button-wrapper"
                    onClick={ () => {this.changeClickedProperty()} }/>
        )
    }
}