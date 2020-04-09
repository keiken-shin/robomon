import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import Header from '../components/Header';
import ErrorBoundary from '../components/ErrorBoundary';
import Pagination from '../components/Pagination';
import axios from 'axios';

const App = () => {
  const [ robomon, setRobomon ] = useState([]);
  const [ searchField, setSearchField ] = useState('');
  const [ loading, setLoading ] = useState(false);

  // Pagination
  const [ currentPage, setCurrentPage ] = useState(1);
  const [ postsPerPage ] = useState(5);
  
  useEffect(() => {
    const getRobots = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/users');
      setRobomon(res.data);
      setLoading(false);
    }

    getRobots();
  }, []);

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  }

  const filterRobots = robomon.filter(robot => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });

  // Get current data
  const indexOfLastData = currentPage * postsPerPage;
  const indexOfFirstData = indexOfLastData - postsPerPage;
  const currentRoboData = filterRobots.slice(indexOfFirstData, indexOfLastData);

  // Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return(
    <div className="bg-gray-900 min-h-screen text-white">
      <Header onSearchChange={onSearchChange} />
      <ErrorBoundary>
        <CardList robots={currentRoboData} loading={loading} />
        <Pagination postsPerPage={postsPerPage} totalPosts={filterRobots.length} paginate={paginate} />
      </ErrorBoundary>
    </div>
  );
}

export default App;
