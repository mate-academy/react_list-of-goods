import React from 'react';

function GoodsList(props) {
  const {goods} = props;

  return (
    <>
      <ul>
        {goods.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  )
}

export default GoodsList;
