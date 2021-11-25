import React from 'react';
import './GoodsList.scss';

interface Props {
  goods: string[];
  selectValue: number,
}

export const GoodsList: React.FC<Props> = ({ goods, selectValue }) => {
  return (
    <ul
      className="Goods__List"
    >
      {goods.map(item => {
        return (
          item.length >= selectValue
            ? (
              <li
                className="Goods__List--item"
                key={item}
              >
                {item}
              </li>
            )
            : null
        );
      })}
    </ul>
  );
};
