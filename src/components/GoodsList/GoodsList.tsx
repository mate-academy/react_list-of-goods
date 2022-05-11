import { Good } from '../../types';

type Props = {
  goods: Good[],
};

export const ListOfGoods: React.FC<Props> = ({ goods }) => (
  <ul className="list">
    {goods.map(good => (
      <li
        className="list__item"
        key={good.id}
      >
        {good.name}
      </li>
    ))}
  </ul>
);
