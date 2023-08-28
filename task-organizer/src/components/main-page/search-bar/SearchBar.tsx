import React from 'react';
import './SearchBar.scss'

function SearchBar(props) {
    const placeholderText = "Type task name"

    let { onTermChange } = props

    return(
        <div className="search-bar-wrapper">
            <input type="text"
                   className="search-bar"
                   placeholder={ placeholderText }
                   onChange={ (event) => onTermChange(event.target.value) }/>
        </div>
    )
}

export default SearchBar;