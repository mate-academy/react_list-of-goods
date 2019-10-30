import React from 'react';

const List = ({ shown, goods }) => {
  if (shown) {
    return (
      <ul>
        {goods.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }

  return false;
};

export default List;
