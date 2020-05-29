import React from "react";
import "./SearchBox.css";
const SearchBox = ({searchfield, searchChange}) => {
    return(
        <div className="pa2">
            <label>
                <input 
                className="pa3 searchbox"
                type="search" 
                placeholder="Search character here"
                onChange={searchChange}
                />
            </label>

        </div>
    )
}

export default SearchBox