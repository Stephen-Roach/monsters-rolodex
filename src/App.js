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

  return (
    <div className='App'>
      {users.map((user) => {
        return <h1 key={user.id}>{user.name}</h1>;
      })}
    </div>
  );
}

export default App;
