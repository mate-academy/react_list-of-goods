import React from 'react';
import uniqueId from '../../function/uniqueId';

const GoodList = ({ testListOfGood }) => (
  <div className="list">
    <ul className="list-group list">
      { testListOfGood.map( good => (
        <li className="list-item" key={uniqueId(good)}>
          {good}
        </li>
      ))}
    </ul>
  </div>
);

export default GoodList;
