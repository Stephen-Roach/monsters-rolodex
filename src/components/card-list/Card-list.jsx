import React from 'react';
import './card-list.styles.css';

import Card from '../card/Card';

function CardList({ monsters }) {
  return (
    <div className='card-list'>
      {monsters.map((monster) => {
        const { name, email, id } = monster;
        return <Card name={name} email={email} id={id} key={id} />;
      })}
    </div>
  );
}

export default CardList;
