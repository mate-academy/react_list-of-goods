import { FC } from 'react';

type Props = {
  goods: string[],
};

export const GoodsList: FC<Props> = ({ goods }) => (
  <ul>
    {goods.map(good => (
      <li
        key={good}
        data-cy="Good"
      >
        {good}
      </li>
    ))}
  </ul>
);
