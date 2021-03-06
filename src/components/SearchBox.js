import React from "react";

const SearchBox = ({ searchField, searchChange}) => {
    return(
        <div className='pa2'>
            <input
            className= 'pa3 bg-lightest-blue ba b--green'
            type='search' 
            placeholder='Search Here!'
            onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;