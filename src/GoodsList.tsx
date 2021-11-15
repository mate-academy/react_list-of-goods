import React from 'react';
import './GoodList.scss';

type Props = {
  goods: string[];
};

const GoodsList: React.FC<Props> = ({ goods }) => {
  return (
    <ul>
      {goods.map(good => (
        <li key={good} className="li">
          {good}
        </li>
      ))}
    </ul>
  );
};

export default GoodsList;
