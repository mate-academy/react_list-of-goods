import React from 'react';

type Props = {
  goods: string[];
};

export const List: React.FC<Props> = (props) => {
  const { goods } = props;

  return (
    <ul className="App__list">
      {goods.map(good => (
        <li key={good} className="App__list-item">
          {good}
        </li>
      ))}
    </ul>
  );
};
