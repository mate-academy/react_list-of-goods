import React from 'react';

export interface Product {
  id: string,
  value: string,
}

interface Props {
  goods: Product[],
}

export const GoodList: React.FC<Props> = ({ goods }) => (
  <ul className="list app__list">
    {goods.map(good => (
      <li key={good.id} className="list__item">
        {good.value}
      </li>
    ))}
  </ul>
);
