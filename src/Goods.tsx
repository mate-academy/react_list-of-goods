import React from 'react';

type Props = {
  goods: string[],
};

export const Goods: React.FC<Props> = ({ goods }) => {
  return (
    <ul className='goods__list'>
      {
        goods.map(good => (
          <li key={good} className='goods__item'>
            {good}
          </li>
        ))
      }
    </ul>
  );
};

export default React.memo(Goods);
