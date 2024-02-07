import { FC } from 'react';

type Props = {
  orderingGoods: string[];
};

export const GoodsList: FC<Props> = ({ orderingGoods }) => {
  return (
    <ul>
      {orderingGoods.map((word) => (
        <li data-cy="Good" key={word}>
          {word}
        </li>
      ))}
    </ul>
  );
};
