import React from 'react';
import './GoodsList.scss';

interface Props {
  goods: string[],
}

export const GoodsList: React.FC<Props> = ({ goods }) => {
  return (
    <ul className="list">
      {goods.map(good => (
        <li className="list__item" key={good}>
          {good}
        </li>
      ))}
    </ul>
  );
};
