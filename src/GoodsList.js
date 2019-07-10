import React from 'react';

function GoodsList({ goods }) {
  return (
    <div>
      <ul>
        {goods.map(good => (
          <li>{good}</li>))}
      </ul>
    </div>
  );
}

export default GoodsList;
