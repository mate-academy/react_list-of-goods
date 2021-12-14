import React from 'react';

interface Props {
  goods: string[],
}

export const Goods: React.FC<Props> = ({ goods }) => (
  <div className="Goods">
    <ul className="Goods__list">
      {
        goods.map(product => (
          <li key={product} className="Goods__item">
            {product}
          </li>
        ))
      }
    </ul>
  </div>
);
