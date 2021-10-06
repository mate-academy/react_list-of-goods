import React from 'react';

type Props = {
  listGoods: string[],
};

export const GoodsVisible: React.FC<Props> = (props) => {
  const { listGoods } = props;

  return (
    <ul className="list-group">
      {listGoods.map(good => (
        <li
          key={good}
          className="list-group-item"
        >
          {good}
        </li>
      ))}
    </ul>
  );
};
