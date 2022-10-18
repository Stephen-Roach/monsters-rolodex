import React, { useState, useEffect } from 'react';
import CardList from './components/card-list/Card-list';

import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      );
      const newData = await response.json();
      console.log(newData);
      setUsers(newData);
      setAllUsers(newData);
    };

    fetchData();
  }, []);

  function handleChange(e) {
    const searchString = e.target.value.toLocaleLowerCase();
    const filteredMonsters =
      allUsers &&
      allUsers.filter((monster) => {
        return monster.name.toLocaleLowerCase().includes(searchString);
      });

    setUsers(filteredMonsters);
  }

  return (
    <div className='App'>
      <input
        className='search-box'
        type='search'
        placeholder='search monsters'
        onChange={handleChange}
      />

      <CardList monsters={users} />
    </div>
  );
}

export default App;
