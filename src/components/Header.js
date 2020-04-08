import React from 'react';
import SearchBox from './SearchBox';

const Header = ({ onSearchChange }) => {
    return(
        <header className="bg-gray-900 sticky top-0 p-6 flex z-10">
            <h1 className="font-bold text-2xl flex-1">Robomon.</h1>
            <SearchBox searchChange={onSearchChange} />
        </header>
    )
}

export default Header;