import React from 'react'

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

    for(let i=1; i<=Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i);
    }


    return (
        <nav className="p-6">
            <ul className="inline-flex">
                {pageNumbers.map(number => (
                    <li key={number} className="">
                        <a 
                            onClick={() => paginate(number)} 
                            href="!#" 
                            className="py-2 px-4 bg-gray-800 hover:bg-gray-700 focus:bg-gray-700">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination;