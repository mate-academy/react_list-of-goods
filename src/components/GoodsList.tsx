import { FC } from 'react';
import { Good } from '../react-app-env';

type Props = {
  goods: Good[];
};

export const GoodsList: FC<Props> = ({ goods }) => (
  <ul>
    {goods.map(({ name, id }) => (
      <li data-cy="Good" key={id}>
        {name}
      </li>
    ))}
  </ul>
);
