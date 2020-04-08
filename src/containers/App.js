import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import Header from '../components/Header';
import ErrorBoundary from '../components/ErrorBoundary';
import axios from 'axios';

const App = () => {
  const [ robomon, setRobomon ] = useState([]);
  const [ searchField, setSearchField ] = useState('');
  
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(res =>{
        const robots = res.data;
        setRobomon(robots)
      })
      .catch(err => console.log(err))
  }, []);

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  }

  const filterRobots = robomon.filter(robot => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return !robomon.length ?
    (
      <div className="bg-gray-900 min-h-screen text-white flex items-center justify-center">
        <h1 className="text-3xl font-bold">Loading...</h1>
      </div>
    )
    :
    (
      <div className="bg-gray-900 min-h-screen text-white">
        <Header onSearchChange={onSearchChange} />
        <ErrorBoundary>
          <CardList robots={ filterRobots }/>
        </ErrorBoundary>
      </div>
    );
}

export default App;
