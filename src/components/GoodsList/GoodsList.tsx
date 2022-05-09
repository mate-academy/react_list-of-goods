import { Good } from '../../types';

type Props = {
  goodsList: Good[],
};

export const ListOfGoods: React.FC<Props> = ({ goodsList }) => (
  <ul className="list">
    {goodsList.map(good => (
      <li
        className="list__item"
        key={good.id}
      >
        {good.name}
      </li>
    ))}
  </ul>
);
