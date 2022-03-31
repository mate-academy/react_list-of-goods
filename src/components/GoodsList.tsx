import React from 'react';
import './GoodsList.scss';

interface Good {
  name: string;
  id: string;
}

type Props = {
  goods: Good[];
};

const GoodList: React.FC<Props> = ({ goods }) => {
  return (
    <div className="goods">
      <ul className="goods__list">
        {goods.map((good) => {
          return (
            <li className="goods__item" key={good.id}>
              {good.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default React.memo(GoodList);
