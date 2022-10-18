import React from 'react';

function CardList({ monsters }) {
  return (
    <div>
      {monsters.map((monster) => {
        return <h1 key={monster.id}>{monster.name}</h1>;
      })}
    </div>
  );
}

export default CardList;
