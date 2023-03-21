import { FC } from 'react';

interface Props {
  goods: string[]
}

export const GoodsList: FC<Props> = ({ goods }) => (
  <ul>
    {goods.map(good => (
      <li
        key={good}
      >
        {good}
      </li>
    ))}
  </ul>
);
