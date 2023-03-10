import { FC } from 'react';

interface Props {
  goods: string[]
}

export const GoodList: FC<Props> = ({ goods }) => (
  <ul>
    {goods.map(good => (
      <li
        data-cy="Good"
        key={good}
        className="box column is-info is-rounded mb-2"
      >
        {good}
      </li>
    ))}
  </ul>
);
