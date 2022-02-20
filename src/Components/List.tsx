import React from 'react';

type Props = {
  goodsList: string[],
};

export const List: React.FC<Props> = ({ goodsList }) => {
  return (
    <ul className="list">
      {goodsList.map(preperGood => (
        <li
          key={preperGood}
        >
          {preperGood}
        </li>
      ))}
    </ul>
  );
};
