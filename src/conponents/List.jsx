import React from 'react';

export const List = ({ goods }) => {
  return(
    <ul className="list-group list-group-flush">
      {goods.map(good => (
        <li className="list-group-item" key={good}>{good}</li>
      ))}
    </ul>
  )
}
