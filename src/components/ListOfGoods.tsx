import React from 'react';

import './ListOfGoods.scss';

type Props = {
  goods: string[]
};

export const ListOfGoods: React.FC<Props> = ({ goods }) => (
  <>
    <ul className="listOfGoods">
      {
        goods.map(item => (
          <li key={item} className="listOfGoods__item">
            {item}
          </li>
        ))
      }
    </ul>
  </>
);
