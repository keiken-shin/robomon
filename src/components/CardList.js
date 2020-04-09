import React from 'react';
import Card from './Card';

const CardList = ({ robots, loading }) => {
    if(loading){
        return(
            <div className="bg-gray-900 min-h-screen text-white flex items-center justify-center">
                <h1 className="text-3xl font-bold">Loading...</h1>
            </div>
        );
    }
    return(
        <section className="grid grid-cols-1 gap-5 p-6 md:grid-cols-4">
            {
                robots.map((robot) => {
                    const { id, name, username, email, phone} = robot;
                    return <Card 
                        key={id} 
                        id={id} 
                        name={name} 
                        username={username} 
                        email={email} 
                        phone={phone}
                        />
                })
            }
        </section>
    )
}

export default CardList;