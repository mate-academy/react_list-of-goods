import React from 'react';

type Props = {
  goodsList: string[],
};

export const List: React.FC<Props> = ({ goodsList }) => {
  return (
    <ul className="list">
      {goodsList.map(prepareGoods => (
        <li
          key={prepareGoods}
        >
          {prepareGoods}
        </li>
      ))}
    </ul>
  );
};
