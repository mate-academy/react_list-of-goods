import React from 'react';
import './App.css';

type Props = {
  goods: string[];
};

export const GoodsList: React.FC<Props> = (props) => {
  const { goods } = props;

  return (
    <ul className="App__list">
      {goods.map(good => (
        <li key={good} className="App__item">
          {good}
        </li>
      ))}
    </ul>
  );
};
