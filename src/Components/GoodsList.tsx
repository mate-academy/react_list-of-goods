import React from 'react';
import './GoodsList.scss';

type Props = {
  goodsList: string[],
};

const GoodsList: React.FC<Props> = ({ goodsList }) => {
  return (
    <ul className="list">
      {goodsList.map(good => {
        return <li className="list__item" key={good}>{good}</li>;
      })}
    </ul>
  );
};

export default GoodsList;
