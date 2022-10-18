import React, { useState, useEffect } from 'react';

import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      );
      const newData = await response.json();
      console.log(newData);
      setUsers(newData);
    };

    fetchData();
  }, []);

  function handleChange(e) {
    const searchString = e.target.value.toLocaleLowerCase();
    const filteredMonsters = users.filter((monster) => {
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
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h1>{user.name}</h1>
          </div>
        );
      })}
    </div>
  );
}

export default App;
