import React from 'react';

const Card = (props) => {

    const {id, name, username, email, phone} = props;

    return(
        <div className="md:flex bg-gray-800 rounded-lg p-6 transition duration-300 ease-in-out transform hover:-translate-y-2 hover:scale-100">
            <img className="bg-gray-700 h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6" src={`https://robohash.org/${id}`} alt="robomon"/>
            <div className="text-center md:text-left">
                <h2 className="text-lg">{name}</h2>
                <div className="text-purple-500">{username}</div>
                <div className="text-gray-600">{email}</div>
                <div className="text-gray-600">{phone}</div>
            </div>
        </div>
    )
}

export default Card;