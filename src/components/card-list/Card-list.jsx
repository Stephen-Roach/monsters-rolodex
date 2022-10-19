import React from 'react';
import './card-list.styles.css';

import Card from '../card/Card';

function CardList({ monsters }) {
  return (
    <div className='card-list'>
      {monsters.map((monster) => {
        // const { name, email, id } = monster;
        return <Card monster={monster} key={monster.id} />;
      })}
    </div>
  );
}

export default CardList;
