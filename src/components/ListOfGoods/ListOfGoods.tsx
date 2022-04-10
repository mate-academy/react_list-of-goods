import React from 'react';

type Props = {
  goodsList: string[],
};

export const ListOfGoods: React.FC<Props> = ({ goodsList }) => (
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
