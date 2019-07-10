import React from 'react';

function GoodsList({ goods }) {
  return (
    <ul>
        {goods.map(good => (
          <li>{good}</li>))}

    </ul>
  );
}

export default GoodsList;
