import React from 'react';
import './ListOfGoods.scss';

type Props = {
  goods: string[],
};

export const ListOfGoods: React.FC<Props> = React.memo(
  ({ goods }) => {
    return (
      <div className="goods">
        <ul className="goods__list">
          {goods.map(item => {
            return <li key={item} className="goods__item">{item}</li>;
          })}
        </ul>
      </div>
    );
  },
);
