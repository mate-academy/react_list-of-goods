import React from 'react';

type Props = {
  goods: string[];
};

export const GoodsList: React.FC<Props> = (props) => {
  const { goods } = props;

  return (
    <ul className="App__list list">
      {goods.map(good => (
        <li key={good} className="list__item">
          {good}
        </li>
      ))}
    </ul>
  );
};
