import React from 'react';
import './SearchBar.scss'

function SearchBar() {
    const placeholderText = "Type task name"

    return(
        <div className="search-bar-wrapper">
            <input type="text"
                   className="search-bar"
                   placeholder={ placeholderText }/>
        </div>
    )
}

export default SearchBar;