import React from 'react';

type Props = {
  goods: string[],
};

export const Goods: React.FC<Props> = ({ goods }) => {
  return (
    <ul>
      {
        goods.map(good => (
          <li key={good}>
            {good}
          </li>
        ))
      }
    </ul>
  )
}

export default React.memo(Goods);
