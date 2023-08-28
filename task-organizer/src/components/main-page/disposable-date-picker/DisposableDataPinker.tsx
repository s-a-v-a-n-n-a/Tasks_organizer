import React from 'react';
import { Calendar, Popover } from 'antd';

import './DisposableDataPicker.scss';

function DisposableDataPinker(props) {
    const { dateSwitcher, relevance } = props;
    let popoverClassNames = "popover-wrapper" + relevance;

    let handleSelection = (date, { source }) => {
        if (source === 'date') {
            console.log(new Date(date).toLocaleDateString());
            dateSwitcher(new Date(date));
        }
    }

    return (
        <Popover content={ <Calendar fullscreen={ false }
                                     onSelect={ handleSelection }
                                     className="calendar-properties"/> }
                 className={ popoverClassNames }>
            <button className="button-wrapper">
                <i className="bi bi-calendar calendar-button"/>
            </button>
        </Popover>
    );
}

export default DisposableDataPinker;