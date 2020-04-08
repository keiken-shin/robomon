import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
    return(
        <div>
            <input 
                className="px-3 h-full bg-transparent border border-purple-600 rounded outline-none" 
                type="search" 
                placeholder="Search..." 
                onChange={searchChange}
            />
        </div>
    )
}

export default SearchBox;